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

// export const metadata = {
//   title: "RX-Prompts",
//   description: "The Ultimate prompts Library ",
//   icons: {
//     icon: "/favicon.ico", // public folder se direct path
//   },
// };

export const metadata = {
  title: "RX-Prompts - Ultimate AI Prompts Library",
  description: "The Ultimate prompts Library for AI Bots. 100+ professional AI prompts across 9 categories.",
  icons: {
    icon: "/favicon.ico", 
  },
  keywords: "AI prompts, ChatGPT prompts, business prompts, content creation, programming",
  authors: [{ name: "Ryan Developer" }],
  openGraph: {
    title: "RX-Prompts - Ultimate AI Prompts Library",
    description: "100+ professional AI prompts across 9 categories",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[orbitron.className, geistSans.className]}>
      <body>
        <head>
        <meta name="google-site-verification" content="Se1a7QWwwyRyhtf7KFVk8WEjsyRJn3BxcHMvnGFs2TE" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8914479693209883"
        crossorigin="anonymous"></script>
        </head>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
