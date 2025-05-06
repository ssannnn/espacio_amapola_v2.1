import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/src/styles/globals.css";
import { ThemeProvider } from "@/src/components/providers/theme-provider";
import { inter, sourGummy } from "@/src/fonts/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Espacio Amapola",
  description: "Abrazá tu maternidad",
  metadataBase: new URL("https://espacioamapola.com"),
  applicationName: "Espacio Amapola",
  keywords: [
    "maternidad",
    "prenatal",
    "postparto",
    "apoyo maternal",
    "salud del bebé",
    "embarazo",
    "lactancia",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Espacio Amapola",
    description: "Abrazá tu maternidad",
    url: "https://espacioamapola.com",
    siteName: "Espacio Amapola",
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <html lang="es" className={`${inter.variable} ${sourGummy.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
