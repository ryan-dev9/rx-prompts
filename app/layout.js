import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const orbitron = Orbitron({
  subsets: ["latin"], // or ["latin-ext"]
  weight: ["400", "700"], // jo weight chahiye
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RX-Prompts",
  description: "Your Ultimate prompts Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={[orbitron.className, geistSans.className]}
      >
        <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
