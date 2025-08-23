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
    page: "/leaked",
  },
  {
    id: "cheatSheets",
    label: "Cheat Sheet's",
    icon: "mdi:incognito",
    color: "text-gray-500",
    page: "/cheat",
  },
  {
    id: "assignments",
    label: "Assignment",
    icon: "material-symbols:assignment-outline",
    color: "text-blue-500",
    page: "/assignments",
  }, 
  {
    id: "scolarship",
    label: "Scolarship",
    icon: "material-symbols:school-outline",
    color: "text-emerald-500",
    page: "/scholarship",
  },
  {
    id: "projects",
    label: "projects",
    icon: "material-symbols:work-outline",
    color: "text-orange-500",
    page: "/projects",
  },
  {
    id: "jobs",
    label: "jobs",
    icon: "material-symbols:work-outline",
    color: "text-yellow-500",
    page: "/jobs",
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
  const [selectedSuggestion, setSelectedSuggestion] = useState<PromptSuggestion | null>(null);

  const handleSuggestionSelect = (suggestion: PromptSuggestion) => {
    setSelectedSuggestion(suggestion);
    setPrompt(`Help me ${suggestion.label.toLowerCase()}`);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Prompt Input Container */}
      <div className="flex w-full flex-col gap-4">
        <PromptInputFullLineComponent prompt={prompt} setPrompt={setPrompt} />
      </div>
      
      {/* Suggestions Container - Detached */}
      <div className="flex w-full flex-col gap-4">
        <h3 className="text-center text-lg font-semibold text-foreground">Quick Actions</h3>
        <PromptSuggestions onSelect={handleSuggestionSelect} />
        
        {/* Page Navigation Field - Shows when suggestion is selected */}
        {selectedSuggestion && (
          <div className="flex flex-col gap-2 rounded-lg border border-default-200 p-4">
            <div className="flex items-center gap-2">
              <Icon className={selectedSuggestion.color} icon={selectedSuggestion.icon} width={20} />
              <span className="font-medium">Selected: {selectedSuggestion.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-default-600">Navigate to:</span>
              <code className="rounded bg-default-100 px-2 py-1 text-sm font-mono">
                {selectedSuggestion.page}
              </code>
            </div>
            <Button
              color="primary"
              variant="flat"
              className="mt-2"
              onPress={() => {
                // Here you can add navigation logic
                console.log(`Navigating to: ${selectedSuggestion.page}`);
                // window.location.href = selectedSuggestion.page;
              }}
            >
              Go to {selectedSuggestion.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
