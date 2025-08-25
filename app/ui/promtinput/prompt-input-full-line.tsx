"use client";

import { Icon } from "@iconify/react";
import React, { useCallback, useState, useEffect } from "react";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Image } from "@heroui/image";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { AudioLines } from "lucide-react";
import { cn } from "@/lib/utils";
import PromptInput from "./prompt-input";

interface PromptInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

interface PromptInputAssetsProps {
  assets: string[];
  onRemoveAsset: (index: number) => void;
}

const PromptInputAssets = ({
  assets,
  onRemoveAsset,
}: PromptInputAssetsProps) => {
  if (assets.length === 0) return null;

  return (
    <>
      {assets.map((asset, index) => (
        <Badge
          key={index}
          isOneChar
          className="opacity-0 group-hover:opacity-100"
          content={
            <Button
              isIconOnly
              radius="full"
              size="sm"
              variant="light"
              onPress={() => onRemoveAsset(index)}
            >
              <Icon
                className="text-foreground"
                icon="iconamoon:close-thin"
                width={16}
              />
            </Button>
          }
        >
          <Image
            alt="uploaded image"
            className="rounded-small border-small border-default-200/50 h-14 w-14 object-cover"
            src={asset}
          />
        </Badge>
      ))}
    </>
  );
};

export function PromptInputFullLineComponent({
  prompt,
  setPrompt,
}: PromptInputProps) {
  const [assets, setAssets] = useState<string[]>([]);
  const [phrase, setPhrase] = useState<string>("");

  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    if (!prompt) return;

    setPrompt("");
    inputRef?.current?.focus();
  }, [prompt, setPrompt]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit();
    },
    [handleSubmit],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();

        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const handlePaste = useCallback(async (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData.items);

    for (const item of items) {
      if (item.type.indexOf("image") !== -1) {
        const blob = item.getAsFile();

        if (!blob) continue;

        const reader = new FileReader();

        reader.onload = () => {
          const base64data = reader.result as string;

          setAssets((prev) => [...prev, base64data]);
        };
        reader.readAsDataURL(blob);
      }
    }
  }, []);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);

      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();

          reader.onload = () => {
            const base64data = reader.result as string;

            setAssets((prev) => [...prev, base64data]);
          };
          reader.readAsDataURL(file);
        }
      });

      // Reset input value to allow uploading the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [],
  );

  return (
    <>
      <Form
        className="rounded-medium shadow-sm bg-default-100 dark:bg-default-100 flex w-full flex-col items-start gap-0"
        validationBehavior="native"
        onSubmit={onSubmit}
      >
        <div
          className={cn(
            "group flex gap-2 pr-3 pl-[20px]",
            assets.length > 0 ? "pt-4" : "",
          )}
        >
          <PromptInputAssets
            assets={assets}
            onRemoveAsset={(index) => {
              setAssets((prev) => prev.filter((_, i) => i !== index));
            }}
          />
        </div>
        <PromptInput
          ref={inputRef}
          classNames={{
            innerWrapper: "relative",
            input: "text-lg lg:text-2xl font-medium h-auto w-full",
            inputWrapper:
              "bg-transparent! shadow-none group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0 pr-3 pl-[20px] pt-3 pb-4",
          }}
          maxRows={16}
          minRows={2}
          name="content"
          radius="lg"
          value={prompt}
          variant="flat"
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onValueChange={setPrompt}
        />
        <div className="flex w-full flex-row items-center justify-between px-3 pb-3">
          <Button
            radius="full"
            size="sm"
            variant="bordered"
            className="bg-transparent border-1 rounded-full py-1"
            onPress={() => fileInputRef.current?.click()}
          >
            <Icon
              className="text-default-500"
              icon="solar:paperclip-outline"
              width={16}
            />
            <span className="text-default-500 text-sm ml-1">Attach</span>
            <VisuallyHidden>
              <input
                ref={fileInputRef}
                multiple
                accept="image/*"
                type="file"
                onChange={handleFileUpload}
              />
            </VisuallyHidden>
          </Button>
          <Button
            color={!prompt ? "default" : "primary"}
            isDisabled={!prompt}
            radius="full"
            size="sm"
            type="submit"
            variant="solid"
            className="py-1"
          >
            <AudioLines
              className={cn(
                "w-4 h-4",
                !prompt ? "text-default-600" : "text-primary-foreground",
              )}
            />
            <span
              className={cn(
                "text-sm ml-1",
                !prompt ? "text-default-600" : "text-primary-foreground",
              )}
            >
              Help Me... plz
            </span>
          </Button>
        </div>
      </Form>
    </>
  );
}

export default function PromptInputFullLine() {
  const [prompt, setPrompt] = React.useState<string>("");
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return <PromptInputFullLineComponent prompt={prompt} setPrompt={setPrompt} />;
}
