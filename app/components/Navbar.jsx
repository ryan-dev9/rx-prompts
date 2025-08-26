"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white/5 backdrop-blur-sm sm:px-4 px-5 py-1  shadow-md items-center fixed flex justify-between top-0 left-0 z-50">

      <Link href="/" className="sm:text-3xl text-3xl font-bold font-[Orbitron] bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
        RX-PROMPTS
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
          Home
        </Link>
        <Link href="/prompts" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
          Prompts
        </Link>
      </div>

    </div>
  );
}