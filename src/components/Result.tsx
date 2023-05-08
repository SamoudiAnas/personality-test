import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import clsx from "classnames";
import React, { Fragment, Dispatch, SetStateAction } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { PersonalityKeys, ResultType } from "@/types/allTypes";

interface ResultProps {
  results: ResultType | null;
  resetTest: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Result = ({ results, resetTest, isOpen, setIsOpen }: ResultProps) => {
  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <AlertDialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <AlertDialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white dark:bg-gray-800",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <AlertDialogPrimitive.Title className="text-xl text-center font-medium text-gray-900 dark:text-gray-100">
                Thank you for completing the test!
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="mt-2  text-center font-normal text-gray-700 dark:text-gray-400">
                Here are the results
              </AlertDialogPrimitive.Description>
              <div className="my-8">
                {Object.keys(results ?? {}).map((key, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[10rem_1fr_2rem] items-center gap-4"
                  >
                    <p className="capitalize dark:text-white">{key}</p>
                    <ProgressPrimitive.Root
                      value={results && results[key as PersonalityKeys]}
                      className="h-2 w-full overflow-hidden rounded-md bg-gray-300 dark:bg-gray-900"
                    >
                      <ProgressPrimitive.Indicator
                        style={{
                          width: `${
                            results && results[key as PersonalityKeys]
                          }%`,
                        }}
                        className="h-full bg-emerald-500 duration-300 ease-in-out dark:bg-white"
                      />
                    </ProgressPrimitive.Root>
                    <p className="capitalize dark:text-white">
                      {results && results[key as PersonalityKeys]}%
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <AlertDialogPrimitive.Action
                  onClick={resetTest}
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-emerald-500",
                    "border border-transparent",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  Redo the Test
                </AlertDialogPrimitive.Action>
              </div>
            </AlertDialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export default Result;
