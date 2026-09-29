import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoGPT – Chat with every AI, side by side",
  description: "Compare ChatGPT, Claude, Gemini and more in one sidebar, web app and Chrome extension.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
