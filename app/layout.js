import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const orbitron = Orbitron({
  subsets: ["latin"], // or ["latin-ext"]
  weight: ["400", "700"], // jo weight chahiye
  display: "swap",
});

export const metadata = {
  title: "RX-Prompts",
  description: "Your Ultimate prompts Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[orbitron.className, geistSans.className]}>
      <body>
        <meta name="google-site-verification" content="Se1a7QWwwyRyhtf7KFVk8WEjsyRJn3BxcHMvnGFs2TE" />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
