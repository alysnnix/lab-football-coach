import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensedia Football Coach Challenge",
  description: "Challenge to create a football coach app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
