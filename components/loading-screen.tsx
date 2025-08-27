"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SparklesText } from "@/components/magicui/sparkles-text";

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const loadingTexts = [
    "Loading your cheat sheet...",
    "Preparing the shortcuts...",
    "Almost there...",
    "Getting everything ready...",
  ];

  useEffect(() => {
    if (!isLoading) {
      setIsTyping(false);
      setCurrentText("");
      setTextIndex(0);
      return;
    }

    setIsTyping(true);
    const currentTextToType = loadingTexts[textIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTextToType.length) {
        setCurrentText(currentTextToType.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          if (textIndex < loadingTexts.length - 1) {
            setTextIndex(prev => prev + 1);
          } else {
            setIsTyping(false);
            onComplete?.();
          }
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [isLoading, textIndex, onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-8">
        <SparklesText>Exam.Sucks</SparklesText>
        <div className="text-center">
          <motion.div
            className="text-lg text-muted-foreground min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {currentText}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
