import { Fragment, useEffect, SetStateAction, useState, Dispatch } from "react";

import { questions } from "@/lib/questions";
import { sliceIntoChunks } from "@/utils/sliceIntoChunks";

import Question from "./Question";
import Progress from "./Progress";
import { ResultType } from "@/types/allTypes";
import axios from "axios";

const LAST_QUESTION_IDX = 9;
const LAST_QUESTIONS_GROUP = 4;
const QUESTIONS_NUMBER = 50;

const QUESTION_HEIGHT_SIZE = 274; // in px
const OFFSET_Y_FIX = 137; //in px

interface QuestionsContainerProps {
  questionsScores: number[];
  setQuestionsScores: Dispatch<SetStateAction<number[]>>;
  currentSetIndex: number;
  setCurrentSetIndex: Dispatch<SetStateAction<number>>;
  currentAnswerScore: number;
  setcurrentAnswerScore: Dispatch<SetStateAction<number>>;
  currentShownQuestion: number;
  setCurrentShownQuestion: Dispatch<SetStateAction<number>>;
  setResults: Dispatch<SetStateAction<ResultType | null>>;
  setIsResultOpen: Dispatch<SetStateAction<boolean>>;
}

export default function QuestionsContainer({
  questionsScores,
  setQuestionsScores,
  currentSetIndex,
  setCurrentSetIndex,
  currentAnswerScore,
  setcurrentAnswerScore,
  currentShownQuestion,
  setCurrentShownQuestion,
  setResults,
  setIsResultOpen,
}: QuestionsContainerProps) {
  const [currentQuestions, setCurrentQuestions] = useState<string[]>(
    sliceIntoChunks(questions, 10)[currentSetIndex]
  );

  //@TODO: add score handling through API
  const nextQuestion = (value: number) => {
    setQuestionsScores((prev) => [...prev, value]);
    setCurrentShownQuestion((prev) => prev + 1);

    if (
      currentShownQuestion === LAST_QUESTION_IDX &&
      currentSetIndex !== LAST_QUESTIONS_GROUP
    ) {
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
    if (
      currentShownQuestion > LAST_QUESTION_IDX &&
      currentSetIndex === LAST_QUESTIONS_GROUP
    ) {
      return 100;
    }
    return currentSetIndex * 20;
  };

  const getPersonalityResult = async () => {
    await axios.post("/api/personality", questionsScores).then((res) => {
      setIsResultOpen(true);
      setResults(res.data);
    });
  };

  useEffect(() => {
    console.log(currentShownQuestion, currentSetIndex, questionsScores.length);
    if (
      currentShownQuestion >= LAST_QUESTION_IDX &&
      currentSetIndex === LAST_QUESTIONS_GROUP &&
      questionsScores.length === QUESTIONS_NUMBER
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
            transform: ` translateY(-${
              currentShownQuestion * QUESTION_HEIGHT_SIZE + OFFSET_Y_FIX
            }px)`,
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
