import { motion } from "framer-motion";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface ProgressProps {
  progress: number;
}

const Progress = ({ progress }: ProgressProps) => {
  return (
    <motion.div className="fixed bottom-0 z-50 bg-white h-24 border-t border-t-gray-300 dark:border-t-transparent w-full py-8  dark:bg-slate-700 flex justify-center items-center gap-6">
      <div className="w-full max-w-md mx-auto">
        <h1 className="mb-4 text-3xl font-bold text-center">
          Progress: {progress}%
        </h1>
        <ProgressPrimitive.Root
          value={progress}
          className="h-2 w-full overflow-hidden rounded-md bg-gray-300 dark:bg-gray-900"
        >
          <ProgressPrimitive.Indicator
            style={{ width: `${progress}%` }}
            className="h-full bg-emerald-500 duration-300 ease-in-out dark:bg-white"
          />
        </ProgressPrimitive.Root>
      </div>
    </motion.div>
  );
};

export default Progress;
