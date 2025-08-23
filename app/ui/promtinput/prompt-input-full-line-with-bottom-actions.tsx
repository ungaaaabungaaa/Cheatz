"use client";
import React from "react";
import PromptInputFullLine from "./prompt-input-full-line";
import { useEffect, useState } from "react";
import { getStudentPhrases } from "../../helpers/title";



export default function Component() {

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
    <div className="flex h-screen max-h-[calc(100vh-140px)] w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-xl flex-col items-center gap-4 lg:gap-8">
          <h1 className="text-default-foreground text-xl  lg:text-3xl leading-9 font-semibold">
            {phrase}
          </h1>
          <div className="flex w-full flex-col gap-4">
            <PromptInputFullLine />
          </div>
        </div>
      </div>
    </div>
  );
}
