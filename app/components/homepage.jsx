"use client"
import Link from "next/link";
import { motion } from "motion/react"

export default function IntroSection() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-full mx-auto px-2">

        {/* Decorative lines with animation */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full  flex justify-between  mb-8"
        >
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        {/* Header Section - Exactly like prompts page */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:mt-0 mt-10 mb-5"
        >
          <h1 className="sm:text-7xl text-[45px] mt-97 sm:mt-0 font-bold font-[Orbitron] bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4">
            RX-PROMPTS
          </h1>
          <p className="text-2xl sm:w-[70%] font-sans w-full sm:mt-6 mt-10 mx-auto text-gray-400 mb-8">
            The Ultimate Prompts Library for world most Intelligent and Smartest person for <span className="text-blue-500 text-3xl font-bold">AI</span> Bots
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full flex justify-center mb-8"
        >
          <Link href="/prompts" className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Lets Explore</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </Link>
        </motion.div>


        {/* Stats Section - New Addition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto sm:px-0 px-3"
        >
          {[
            { number: "100+", label: "AI Prompts", icon: "🤖" },
            { number: "9", label: "Categories", icon: "📂" },
            { number: "Daily", label: "Updates", icon: "🔄" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + (index * 0.1),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5
              }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 text-center"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-2 font-[Orbitron]">{stat.number}</h2>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-blue-500/20"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}