import React, { Dispatch, SetStateAction } from "react";
import Slider from "./Slider";

interface QuestionProps {
  index: number;
  question: string;
  currentShownQuestion: number;
  nextQuestion: (value: number) => void;
  currentAnswerScore: number;
  setcurrentAnswerScore: Dispatch<SetStateAction<number>>;
}

export default function Question({
  index,
  question,
  nextQuestion,
  currentShownQuestion,
}: QuestionProps) {
  return (
    <div
      key={index}
      className={`${
        currentShownQuestion !== index ? "opacity-40 pointer-events-none" : ""
      }  max-w-md mx-auto py-8 h-[274px] flex-shrink-0 flex flex-col justify-center`}
    >
      <h2 className="text-gray-800 dark:text-white text-2xl sm:text-3xl text-center font-bold">
        I {question}
      </h2>
      <Slider nextQuestion={nextQuestion} />
    </div>
  );
}
