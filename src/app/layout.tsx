import type React from "react";
import "@/src/styles/globals.css";
import { ThemeProvider } from "@/src/components/providers/theme-provider";
import { inter, sourGummy } from "@/src/fonts/fonts";

export const metadata = {
  title: "Espacio Amapola",
  description: "Abrazá tu maternidad",
  // metadataBase: new URL(""),
  openGraph: {
    title: "Espacio Amapola",
    description: "Abrazá tu maternidad",
    //url: "",
    siteName: "Espacio Amapola",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sourGummy.variable}`}>
      <body className="font-sans">     
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}