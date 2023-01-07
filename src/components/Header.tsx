import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-24 fixed py-8 z-50 bg-gray-50 text-black dark:text-white dark:bg-slate-700 flex justify-center items-center gap-6 border-b border-b-gray-300 dark:border-b-transparent">
      <p className=" text-center text-2xl md:text-4xl mb-0">Personality Test</p>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          aria-label="Button to set theme to light"
          className=" border border-black dark:border-white  p-2 rounded-full hover:cursor-pointer hover:bg-slate-400/40"
        >
          <SunIcon className="text-black dark:text-white  w-4 h-4 text-4xl" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          aria-label="Button to set theme to Dark"
          className=" border border-black dark:border-white  p-2 rounded-full hover:cursor-pointer hover:bg-slate-400/40"
        >
          <MoonIcon className="text-black dark:text-white  w-4 h-4 text-4xl" />
        </button>
      )}
    </div>
  );
}
