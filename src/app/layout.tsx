import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vijay Chavare - Full-Stack Web Developer",
  description: "Professional portfolio of Vijay Chavare, a full-stack web developer specializing in React.js, Next.js, and modern JavaScript technologies.",
  keywords: ["web developer", "React.js", "Next.js", "full-stack", "JavaScript", "TypeScript"],
  authors: [{ name: "Vijay Chavare" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
