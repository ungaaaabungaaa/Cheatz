"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { PromptInputFullLineComponent } from "./prompt-input-full-line";

// Define suggestion lists for each category
const suggestionLists = {
  leakedPapers: [
    "Last-Minute Qs Leak",
    "Exam Papers Chahiye?",
    "Teacher LeakedPapers",
  ],
  cheatSheets: [
    "Quick Formula List",
    "Micro Xerox",
    "Exam Cheats Ready",
    "Last-Minute Notes",
  ],
  assignments: ["Assignment Dealers", "Assignment Black Market"],
  scolarship: [
    "Scholarships = Less Fees, More Chai",
    "No BullShit Scholarship Links",
    "Click Here, Save Money",
  ],
  projects: [
    "Buy a Ready-Made Project",
    "Pay Agency for Your College Work",
    "Outsource Entire Project (Cash Fix)",
    "Shortcut: Projects for Sale",
  ],
  jobs: [
    "Walk in interview's",
    "Shortcut Agencies To Get A Job",
    "Pay Someone To Crack Interview",
  ],
};

const suggestions = [
  {
    id: "leakedPapers",
    label: "Leaked Paper's",
    icon: "uiw:stop-o",
    color: "text-red-500",
  },
  {
    id: "cheatSheets",
    label: "Cheat Sheet's",
    icon: "mdi:incognito",
    color: "text-gray-500",
  },
  {
    id: "assignments",
    label: "Assignment",
    icon: "material-symbols:assignment-outline",
    color: "text-blue-500",
  },
  {
    id: "scolarship",
    label: "Scolarship",
    icon: "material-symbols:school-outline",
    color: "text-emerald-500",
  },
  {
    id: "projects",
    label: "projects",
    icon: "material-symbols:work-outline",
    color: "text-orange-500",
  },
  {
    id: "jobs",
    label: "jobs",
    icon: "material-symbols:work-outline",
    color: "text-yellow-500",
  },
];

type PromptSuggestion = (typeof suggestions)[number];

interface PromptSuggestionsProps {
  onSelect?: (suggestion: PromptSuggestion) => void;
}

const PromptSuggestions = ({ onSelect }: PromptSuggestionsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleButtonClick = (suggestion: PromptSuggestion) => {
    if (selectedCategory === suggestion.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(suggestion.id);
    }
    onSelect?.(suggestion);
  };

  const handleSuggestionClick = (suggestionText: string) => {
    // Handle suggestion click without filling the prompt input
    console.log("Suggestion clicked:", suggestionText);
  };

  const currentSuggestions = selectedCategory
    ? suggestionLists[selectedCategory as keyof typeof suggestionLists]
    : [];

  return (
    <div className="flex flex-col gap-6">
      {/* Buttons Row */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        {suggestions.map((suggestion) => {
          const IconComponent = (
            <Icon
              className={suggestion.color}
              icon={suggestion.icon}
              width={18}
            />
          );
          const isSelected = selectedCategory === suggestion.id;

          return (
            <Button
              key={suggestion.id}
              className={`border-1 rounded-full lg:px-6 lg:py-2 ${isSelected ? "bg-gray-100" : ""}`}
              startContent={IconComponent}
              variant="light"
              onPress={() => handleButtonClick(suggestion)}
            >
              {suggestion.label}
            </Button>
          );
        })}
      </div>

      {/* Single Centered List */}
      {selectedCategory && currentSuggestions.length > 0 && (
        <div className="flex justify-center">
          <div className="w-full max-w-full">
            <div className="py-2">
              {currentSuggestions.map((item, index) => (
                <div className="py-2" key={index}>
                  <button
                    className="w-full px-4 py-3 text-left text-xl text-gray-700 transition-colors"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    {item}
                  </button>
                  {index < currentSuggestions.length - 1 && (
                    <div className="border-b border-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function PromptInputFullLineWithBottomActions() {
  const [prompt, setPrompt] = useState("");

  const handleSuggestionSelect = (suggestion: PromptSuggestion) => {
    // Handle button click - could be used for analytics or other purposes
    console.log("Button clicked:", suggestion.label);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Prompt Input Container */}
      <div className="flex w-full flex-col gap-4">
        <PromptInputFullLineComponent prompt={prompt} setPrompt={setPrompt} />
      </div>

      {/* Suggestions Container - Detached */}
      <div className="flex w-full flex-col gap-2">
        <PromptSuggestions onSelect={handleSuggestionSelect} />
      </div>
    </div>
  );
}
