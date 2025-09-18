import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import BubbleMenu from "@/components/BubbleMenu";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="favicons/site.webmanifest" rel="manifest" />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-transparent font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-full lg:max-h-dvh lg:h-screen">
            <BubbleMenu
              items={[
                {
                  label: 'Assignment$ ?',
                  href: '/assignments',
                  ariaLabel: 'Assignments',
                  rotation: -8,
                  hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
                },
                {
                  label: 'Che@ts',
                  href: '/cheat',
                  ariaLabel: 'Cheat Sheets',
                  rotation: 8,
                  hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
                },
                {
                  label: 'No job?',
                  href: '/jobs',
                  ariaLabel: 'Jobs',
                  rotation: 8,
                  hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
                },
                {
                  label: 'Le@ked Paper$',
                  href: '/leaked',
                  ariaLabel: 'Leaked Papers',
                  rotation: 8,
                  hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
                },
                {
                  label: 'Project$',
                  href: '/projects',
                  ariaLabel: 'Projects',
                  rotation: -8,
                  hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
                }
              ]}
              menuAriaLabel="Toggle navigation"
              useFixedPosition={true}
              animationEase="back.out(1.5)"
              animationDuration={0.5}
              staggerDelay={0.12}
              style={{ 
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                left: 'auto',
                zIndex: 1000
              }}
            />
            <main className="container mx-auto max-w-full lg:max-w-7xl lg:pt-16 lg:px-6">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
