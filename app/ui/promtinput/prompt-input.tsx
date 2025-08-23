"use client";

import type { TextAreaProps } from "@heroui/input";
import React, { useState, useEffect, useRef } from "react";
import { Textarea } from "@heroui/input";
import { cn } from "@/lib/utils";

const PromptInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ classNames = {}, ...props }, ref) => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const animationRef = useRef<NodeJS.Timeout | null>(null);
    const availablePlaceholdersRef = useRef<string[]>([]);
    
    const placeholders = [
      "Enter Your USN!",
      "Ask me anything ?",
      "Convert this PDF to PPT",
      "Where is the Nearest Sutta Shop",
      "My Boyfreind Cheated on Exam",
      "Chat with PDF or Pooja",
      "How to Make a Resume?",
      "Best Cheap PG Nearby ?" ,
      "Where to Apply for Scholarships?",
      "Free WiFi Password Please",
      "Proxy Attendance Hack?",
      "Any Leaked Papers?",
      "She Cheated on Me",
      "College Bus Routes & Timings?",
      "Best Chai Spot Near College",
      "Shortcut to Pass Internal",
      "Cheap Beer Spot Nearby ?",
      "Any Free Food Event?",
    ];

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Get next random placeholder
    const getNextPlaceholder = () => {
      if (availablePlaceholdersRef.current.length === 0) {
        // If all placeholders have been used, reshuffle and start over
        availablePlaceholdersRef.current = shuffleArray(placeholders);
      }
      
      // Remove and return the last placeholder from the array
      return availablePlaceholdersRef.current.pop()!;
    };

    // Handle component mount
    useEffect(() => {
      setIsMounted(true);
    }, []);

    // Start animation only after component is mounted
    useEffect(() => {
      if (!isMounted) return;

      // Initialize with shuffled placeholders
      availablePlaceholdersRef.current = shuffleArray(placeholders);

      const animatePlaceholder = async () => {
        const placeholder = getNextPlaceholder();
        
        // Type out the current placeholder
        for (let i = 0; i <= placeholder.length; i++) {
          await new Promise(resolve => {
            animationRef.current = setTimeout(resolve, 100);
          });
          setCurrentPlaceholder(placeholder.slice(0, i));
        }
        
        // Wait before starting to delete
        await new Promise(resolve => {
          animationRef.current = setTimeout(resolve, 2000);
        });
        
        // Delete the placeholder
        for (let i = placeholder.length; i >= 0; i--) {
          await new Promise(resolve => {
            animationRef.current = setTimeout(resolve, 50);
          });
          setCurrentPlaceholder(placeholder.slice(0, i));
        }
        
        // Continue the animation
        animatePlaceholder();
      };

      animatePlaceholder();
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    }, [isMounted]); // Only run when isMounted changes

    return (
      <Textarea
        ref={ref}
        aria-label="Prompt"
        className="min-h-[40px] lg:min-h-[80px] mt-2 lg:mt-8"
        classNames={{
          ...classNames,
          label: cn("hidden", classNames?.label),
          input: cn("py-0", classNames?.input),
        }}
        minRows={1}
        placeholder={isMounted ? currentPlaceholder : "Enter Your USN!"}
        radius="lg"
        variant="bordered"
        {...props}
      />
    );
  },
);

export default PromptInput;

PromptInput.displayName = "PromptInput";
