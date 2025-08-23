"use client";

import React, {useState} from "react";
import {Button} from "@heroui/button";
import {Icon} from "@iconify/react";

import {PromptInputFullLineComponent} from "./prompt-input-full-line";

const suggestions = [
  {
    id: "draft-email",
    label: "Draft an email",
    icon: "solar:document-add-outline",
  },
  {
    id: "create-image",
    label: "Create an image",
    icon: "solar:gallery-linear",
  },
  {
    id: "brainstorm",
    label: "Brainstorm",
    icon: "solar:lightbulb-linear",
  },
  {
    id: "make-plan",
    label: "Make a plan",
    icon: "solar:checklist-linear",
  },
  {
    id: "code",
    label: "Code",
    icon: "solar:code-linear",
  },
  {
    id: "help-write",
    label: "Help me write",
    icon: "solar:pen-2-outline",
  },
  {
    id: "get-advice",
    label: "Get advice",
    icon: "solar:square-academic-cap-2-outline",
  },
];

type PromptSuggestion = (typeof suggestions)[number];

interface PromptSuggestionsProps {
  onSelect?: (suggestion: PromptSuggestion) => void;
}

const PromptSuggestions = ({onSelect}: PromptSuggestionsProps) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-2">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion.id}
          className="border-default-200 text-default-foreground hover:border-default-400 hover:text-foreground data-[hover=true]:border-default-400 data-[hover=true]:text-foreground h-8 gap-2 rounded-full border-1 px-3 transition-colors duration-150!"
          startContent={<Icon className="text-default-500" icon={suggestion.icon} width={18} />}
          variant="light"
          onPress={() => onSelect?.(suggestion)}
        >
          {suggestion.label}
        </Button>
      ))}
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
