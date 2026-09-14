import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X‑Machina | AI Learning & Hackathon Portal",
  description: "AI coursework, institutional programs and hackathon delivery for students, schools and universities.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
