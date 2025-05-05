import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/src/styles/globals.css";
import { ThemeProvider } from "@/src/components/providers/theme-provider";
import { inter, sourGummy } from "@/src/fonts/fonts";

export const metadata: Metadata = {
  title: "Espacio Amapola",
  description: "Abrazá tu maternidad",
  // metadataBase: new URL("https://espacioamapola.ar"),
  openGraph: {
    title: "Espacio Amapola",
    description: "Abrazá tu maternidad",
    // url: "",
    siteName: "Espacio Amapola",
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
      </body>
    </html>
  );
}
