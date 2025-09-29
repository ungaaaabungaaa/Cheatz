"use client";
import { HeroUIProvider } from "@heroui/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";


export function Providers({ 
  children, 
  themeProps 
}: { 
  children: React.ReactNode;
  themeProps?: any;
}) {
  return (
      <HeroUIProvider {...themeProps}>{children}</HeroUIProvider>
  );
}
