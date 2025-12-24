import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { CommandMenu } from "@/components/ui/command-menu";
import { ChatFAB } from "@/components/chat/chat-fab";
import { ChatModal } from "@/components/chat/chat-modal";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "full-stack developer",
    "desarrollador full-stack",
    "portfolio",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocaleProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
            <CommandMenu />
            <ChatFAB />
            <ChatModal />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
