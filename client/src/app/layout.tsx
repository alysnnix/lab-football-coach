import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next";

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
  title: "Sensedia Football Coach Challenge",
  description: "Challenge to create a football coach app",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased h-full`}>
        <NuqsAdapter>
          <Toaster />
          <Header />
          <main>
            {children}
            {users}
          </main>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
