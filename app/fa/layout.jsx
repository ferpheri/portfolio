import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ferferi",
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fericon.png" />
        <meta
          name="theme-color"
          // media="(prefers-color-scheme: light)"
          content="#312e81"
        />
        <meta
          name="theme-color"
          // media="(prefers-color-scheme: dark)"
          content="#00ff99"
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
