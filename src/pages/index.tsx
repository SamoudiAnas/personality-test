import Head from "next/head";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/useIsMounted";

import Header from "@/components/Header";
import QuestionModal from "@/components/QuestionModal";

export default function Home() {
  const { setTheme } = useTheme();
  const { isMounted } = useIsMounted();

  useEffect(() => {
    setTheme("dark");
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gray-200 dark:bg-slate-800 relative ">
      <Head>
        <title>Personality Test | Anas Samoudi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <div className="flex flex-col w-full">
        <Header />
        <QuestionModal />
      </div>
    </div>
  );
}
