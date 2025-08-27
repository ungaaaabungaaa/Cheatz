"use client";

import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./loading-screen";

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning?: boolean;
  onTransitionComplete?: () => void;
}

export function PageTransition({ 
  children, 
  isTransitioning = false,
  onTransitionComplete 
}: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (isTransitioning) {
      setIsLoading(true);
      setShowContent(false);
    }
  }, [isTransitioning]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
    onTransitionComplete?.();
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key="page-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

