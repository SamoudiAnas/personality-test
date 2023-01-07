import React from "react";

interface SliderProps {
  nextQuestion: (value: number) => void;
}

const Slider = ({ nextQuestion }: SliderProps) => {
  const selectScore = (score: number) => {
    nextQuestion(score);
  };

  return (
    <>
      <div className="grid grid-cols-5 items-center gap-4 mt-12">
        <button
          aria-label="Disagree"
          onClick={() => selectScore(1)}
          className="block w-12 h-12 rounded-full border-2 border-red-500 dark:border-white mx-auto focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:cursor-pointer hover:bg-red-500 hover:dark:bg-white"
        ></button>
        <button
          onClick={() => selectScore(2)}
          aria-label="Slightly Disagree"
          className="block w-10 h-10 rounded-full border-2 border-red-400 dark:border-white mx-auto focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:cursor-pointer hover:bg-emerald-600 hover:dark:bg-white"
        ></button>
        <button
          onClick={() => selectScore(3)}
          aria-label="Neutral"
          className="block w-8 h-8 rounded-full border-2 dark:border-white mx-auto focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:cursor-pointer hover:bg-gray-500 border-gray-500 hover:dark:border-gray-400 hover:dark:bg-gray-400"
        ></button>
        <button
          onClick={() => selectScore(4)}
          aria-label="Slightly Agree"
          className="block w-10 h-10 rounded-full border-2 dark:border-white mx-auto focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:cursor-pointer hover:bg-green-600 border-green-600 hover:dark:bg-green-400"
        ></button>
        <button
          onClick={() => selectScore(5)}
          aria-label="Agree"
          className="block w-12 h-12 rounded-full border-2 dark:border-white mx-auto focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:cursor-pointer hover:bg-green-800 border-green-800 hover:dark:bg-green-600"
        ></button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className="font-medium  text-center mt-4 text-gray-600 dark:text-gray-400">
          Disagree
        </p>
        <p className="font-medium text-center mt-4 text-gray-600 dark:text-gray-400">
          Slightly Disagree
        </p>
        <p className="font-medium text-center mt-4 text-gray-600 dark:text-gray-400">
          Neutral
        </p>
        <p className="font-medium text-center mt-4 text-gray-600 dark:text-gray-400">
          Slightly Agree
        </p>
        <p className="font-medium text-center mt-4 text-gray-600 dark:text-gray-400">
          Agree
        </p>
      </div>
    </>
  );
};

export default Slider;
