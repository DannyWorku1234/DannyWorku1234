import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cybersecurity Analyst — Portfolio",
    template: "%s | Cybersecurity Analyst",
  },
  description:
    "Portfolio showcasing threat hunting, incident response, pentesting, and security engineering projects.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Cybersecurity Analyst — Portfolio",
    description:
      "Threat hunting, incident response, offensive security, detections, labs, and talks.",
    url: "https://example.com",
    siteName: "Cybersecurity Portfolio",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "Cybersecurity Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Analyst — Portfolio",
    description:
      "Threat hunting, incident response, offensive security, detections, labs, and talks.",
    images: ["/og.svg"],
  },
  keywords: [
    "cybersecurity",
    "threat hunting",
    "incident response",
    "blue team",
    "red team",
    "pentesting",
    "SIEM",
    "EDR",
    "SOC",
    "DFIR",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
