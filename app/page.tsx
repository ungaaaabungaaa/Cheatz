"use client";
import PromptInputFullLineWithBottomActions from "./ui/promtinput/prompt-input-full-line-with-bottom-actions";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center min-h-[80vh] pt-20">
        <div className="flex w-full max-w-xl flex-col items-center">
          <div className="flex w-full flex-col gap-4">
            <PromptInputFullLineWithBottomActions />
          </div>
        </div>
    </section>
  );
}
