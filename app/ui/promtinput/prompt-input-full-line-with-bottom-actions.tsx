"use client";

import React, {useState} from "react";
import {Button} from "@heroui/button";
import {Icon} from "@iconify/react";
import {PromptInputFullLineComponent} from "./prompt-input-full-line";

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

const PromptSuggestions = ({onSelect}: PromptSuggestionsProps) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-2">
      {suggestions.map((suggestion) => {
        // Use Iconify for all icons since we're using Material Symbols consistently
        const IconComponent = <Icon className={suggestion.color} icon={suggestion.icon} width={18} />;

        return (
          <Button
            key={suggestion.id}
            size="lg"
            className="border-1 rounded-full lg:px-6 lg:py-2"
            startContent={IconComponent}
            variant="light"
            onPress={() => onSelect?.(suggestion)}
          >
            {suggestion.label}
          </Button>
        );
      })}
    </div>
  );
};

export default function PromptInputFullLineWithBottomActions() {
  const [prompt, setPrompt] = useState("");

  const handleSuggestionSelect = (suggestion: PromptSuggestion) => {
    setPrompt(`Help me ${suggestion.label.toLowerCase()}`);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      
      <PromptInputFullLineComponent prompt={prompt} setPrompt={setPrompt} />
      <PromptSuggestions onSelect={handleSuggestionSelect} />
    </div>
  );
}
