"use client";
import React, { useCallback, useState, useEffect } from "react";
import PromptInputFullLineWithBottomActions from "./ui/promtinput/prompt-input-full-line-with-bottom-actions";
import { getStudentPhrases } from "@/app/helpers/title";

export default function Home() {
  const [phrase, setPhrase] = useState<string>("");
  useEffect(() => {
    // Check if we have a phrase stored in session storage
    const storedPhrase = sessionStorage.getItem("studentPhrase");

    if (storedPhrase) {
      // Use the stored phrase
      setPhrase(storedPhrase);
    } else {
      // Generate a new phrase and store it
      const newPhrase = getStudentPhrases();

      sessionStorage.setItem("studentPhrase", newPhrase);
      setPhrase(newPhrase);
    }
  }, []);
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-dvh lg:min-h-screen w-full">
      <div className="flex w-full lg:max-w-5xl flex-col items-center p-4">
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-2xl lg:text-6xl text-center font-bold mb-2 lg:mb-4">
            {phrase}
          </h1>
          <PromptInputFullLineWithBottomActions />
        </div>
      </div>
    </section>
  );
}
