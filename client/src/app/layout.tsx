import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Football Coach",
  description: "A football coach.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/favicon/dark.svg",
        href: "/assets/favicon/dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/favicon/light.svg",
        href: "/assets/favicon/light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
  users,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        <Toaster />
        <Header />
        <main>
          {children}
          {users}
        </main>
        <Footer />
      </body>
    </html>
  );
}
