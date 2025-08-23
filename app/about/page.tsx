"use client";
import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button";

export default function AboutPage() {
  return (
    <div className="">
      <div className="max-h-dvh min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            No Cap, Just Studentz 4 Studentz
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-8">
            From Love 💔 Drama ➝ To Student Karma. <br /> Just Helping the Crew
            Out ✌️
          </p>
          <InteractiveHoverButton
            className="w-auto py-2"
            onClick={() =>
              window.open("https://syedabdulmuqeeth.com", "_blank")
            }
          >
            Buy me a Coffee
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
