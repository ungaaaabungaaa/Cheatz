"use client";

import type { TextAreaProps } from "@heroui/input";

import React from "react";
import { Textarea } from "@heroui/input";
import clsx from "clsx";

const PromptInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ classNames = {}, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        aria-label="Prompt"
        className="min-h-[40px]"
        classNames={{
          ...classNames,
          label: clsx("hidden", classNames?.label),
          input: clsx("py-0", classNames?.input),
        }}
        minRows={1}
        placeholder="Enter Your USN"
        radius="lg"
        variant="bordered"
        {...props}
      />
    );
  },
);

export default PromptInput;

PromptInput.displayName = "PromptInput";
