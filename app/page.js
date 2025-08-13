import IntroSection from "./components/homepage";

export const metadata = {
  title: "RX-Prompts",
  description: "Your Ultimate prompts Library",
};

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <IntroSection/>
    </div>
  );
}
