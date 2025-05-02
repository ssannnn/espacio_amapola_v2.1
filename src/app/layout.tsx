import type React from "react"
import "@/src/styles/globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"

export const metadata = {
  title: "Espacio Amapola",
  description: "Abrazá tu maternidad",
  // Add the Google Fonts links to the metadata
 // metadataBase: new URL(""),
  openGraph: {
    title: "Espacio Amapola",
    description: "Abrazá tu maternidad",
    //url: "",
    siteName: "Espacio Amapola",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
