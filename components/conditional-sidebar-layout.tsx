"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/ui/sidebar/app-sidebar";
import { useEffect, useState } from "react";

interface ConditionalSidebarLayoutProps {
  children: React.ReactNode;
}

// Pages that should NOT show the sidebar
const PAGES_WITHOUT_SIDEBAR = [
  "/",
  "/about",
  "/contact", 
  "/terms",
  "/privacy",
  "/test"
];

export function ConditionalSidebarLayout({ children }: ConditionalSidebarLayoutProps) {
  const pathname = usePathname();
  const [shouldShowSidebar, setShouldShowSidebar] = useState(() => {
    // Initialize state based on pathname to prevent flickering
    return !PAGES_WITHOUT_SIDEBAR.includes(pathname);
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Determine if sidebar should be shown based on current pathname
    const showSidebar = !PAGES_WITHOUT_SIDEBAR.includes(pathname);
    
    if (showSidebar !== shouldShowSidebar) {
      setIsAnimating(true);
      // Small delay to allow for smooth transition
      setTimeout(() => {
        setShouldShowSidebar(showSidebar);
        setIsAnimating(false);
      }, 50);
    }
    
    setIsInitialized(true);
  }, [pathname, shouldShowSidebar]);

  // Show a minimal loading state only on first load to prevent layout shift
  if (!isInitialized) {
    return (
      <div className="min-h-screen w-full">
        {children}
      </div>
    );
  }

  // If sidebar should be shown, wrap with SidebarProvider
  if (shouldShowSidebar) {
    return (
      <SidebarProvider>
        <div className={`flex min-h-screen w-full transition-all duration-300 ease-in-out ${
          isAnimating ? 'opacity-95' : 'opacity-100'
        }`}>
          <div className="transition-transform duration-300 ease-in-out">
            <AppSidebar />
          </div>
          <main className="flex-1 transition-all duration-300 ease-in-out">
            {children}
          </main>
        </div>
      </SidebarProvider>
    );
  }

  // If no sidebar, render children directly with smooth transition and proper container styling
  return (
    <div className={`transition-all duration-300 ease-in-out ${
      isAnimating ? 'opacity-95' : 'opacity-100'
    }`}>
      <main className="container mx-auto max-w-full lg:max-w-7xl lg:pt-16 lg:px-6">
        {children}
      </main>
    </div>
  );
}
