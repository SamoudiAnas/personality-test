import { Fragment, useEffect, useState } from "react";

import { questions } from "@/config/questions";
import { sliceIntoChunks } from "@/utils/sliceIntoChunks";

import Question from "./Question";
import Progress from "./Progress";

export default function QuestionModal() {
  const [questionsScores, setQuestionsScores] = useState<number[]>([]);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentAnswerScore, setcurrentAnswerScore] = useState(0);
  const [currentShownQuestion, setCurrentShownQuestion] = useState(0);

  const [currentQuestions, setCurrentQuestions] = useState<string[]>(
    sliceIntoChunks(questions, 10)[currentSetIndex]
  );

  //@TODO: add score handling through API
  const nextQuestion = (value: number) => {
    setQuestionsScores((prev) => [...prev, value]);
    setCurrentShownQuestion((prev) => prev + 1);

    if (currentShownQuestion === 9 && currentSetIndex !== 4) {
      //reset question and start from 0
      setCurrentShownQuestion(0);
      setCurrentQuestions(
        () => sliceIntoChunks(questions, 10)[currentSetIndex + 1]
      );
      setCurrentSetIndex((prev) => prev + 1);
      return;
    }
  };

  const handleProgress = (): number => {
    //if it reaches the last question
    if (currentShownQuestion > 9 && currentSetIndex === 4) {
      return 100;
    }
    return currentSetIndex * 20;
  };

  const getPersonalityResult = async () => {
    await fetch("/api/personality", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionsScores),
      cache: "default",
    });
  };

  useEffect(() => {
    if (
      currentShownQuestion === 9 &&
      currentSetIndex === 4 &&
      questionsScores.length === 50
    ) {
      getPersonalityResult();
    }
  }, [currentShownQuestion]);

  return (
    <Fragment>
      <div className="mx-auto w-full h-screen overflow-hidden relative">
        <div
          className="transition-all absolute w-full top-1/2"
          style={{
            transform: ` translateY(-${currentShownQuestion * 274 + 137}px)`,
          }}
        >
          {currentQuestions.map((question, index) => (
            <div
              className={`${
                currentShownQuestion !== index
                  ? ""
                  : "border border-black bg-slate-100 dark:bg-slate-900 dark:border-transparent"
              }`}
            >
              <Question
                index={index}
                question={question}
                currentAnswerScore={currentAnswerScore}
                currentShownQuestion={currentShownQuestion}
                setcurrentAnswerScore={setcurrentAnswerScore}
                nextQuestion={nextQuestion}
              />
            </div>
          ))}
        </div>
      </div>

      <Progress progress={handleProgress()} />
    </Fragment>
  );
}
