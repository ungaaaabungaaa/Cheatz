"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  // Force light theme only - override any theme props
  const forcedLightThemeProps = {
    ...themeProps,
    attribute: "class",
    defaultTheme: "light",
    forcedTheme: "light", // This forces the theme to always be light
    enableSystem: false, // Disable system theme detection
    enableColorScheme: false, // Disable color scheme changes
  };

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...forcedLightThemeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
