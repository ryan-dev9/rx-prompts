"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";


function Page() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: 1,
      name: "Popular prompts",
      description: "Most Popular prompts they highest user likes image video script business startegy generation",
      icon: "🔥",
      promptCount: "10+ prompts",
      color: "from-blue-600 to-purple-600",
      route: "business-marketing"
    },
    {
      id: 2,
      name: "Business & Marketing",
      description: "Professional prompts for business strategies, marketing campaigns, and sales optimization.",
      icon: "💼",
      promptCount: "10+ prompts",
      color: "from-blue-600 to-purple-600",
      route: "business-marketing"
    },
    {
      id: 3,
      name: "Content Creation",
      description: "Creative writing, blog posts, social media content, and storytelling prompts.",
      icon: "✍️",
      promptCount: "20+ prompts",
      color: "from-green-600 to-teal-600",
      route: "content-creation"
    },
    {
      id: 4,
      name: "Programming & Tech",
      description: "Code generation, debugging, architecture, and technical documentation prompts.",
      icon: "💻",
      promptCount: "18+ prompts",
      color: "from-orange-600 to-red-600",
      route: "programming-tech"
    },
    {
      id: 5,
      name: "Education & Learning",
      description: "Study guides, explanations, tutorials, and educational content creation.",
      icon: "📚",
      promptCount: "12+ prompts",
      color: "from-indigo-600 to-blue-600",
      route: "education-learning"
    },
    {
      id: 6,
      name: "Image Generation",
      description: "Image generation, art concepts, design ideas, and creative inspiration image prompts.",
      icon: "🎨",
      promptCount: "20+ prompts",
      color: "from-pink-600 to-rose-600",
      route: "image-generation"
    },
    {
      id: 7,
      name: "Data Analysis",
      description: "Data processing, analysis, visualization, and statistical interpretation prompts.",
      icon: "📊",
      promptCount: "10+ prompts",
      color: "from-cyan-600 to-blue-600",
      route: "data-analysis"
    },
    {
      id: 8,
      name: "Health & Wellness",
      description: "Fitness plans, nutrition advice, mental health, and wellness guidance prompts.",
      icon: "🏥",
      promptCount: "10+ prompts",
      color: "from-emerald-600 to-green-600",
      route: "health-wellness"
    },
    // {
    //   id: 9,
    //   name: "Research and Writing",
    //   description: "Academic writing, research assistance, citations, and scholarly content prompts.",
    //   icon: "🔍",
    //   promptCount: "10+ prompts",
    //   color: "from-violet-600 to-purple-600",
    //   route: "research-writing"
    // }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (route) => {
    router.push(`/prompts/${route}`);
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="sm:text-6xl text-5xl mt-2 font-bold font-[Orbitron] bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4">
            RX-PROMPTS
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Your Ultimate AI Prompt Library
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Select Category Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-[Orbitron]">
            Search Categories
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Find the perfect prompt category instantly
          </p>
          <input
            type="text"
            placeholder="Search Category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative cursor-pointer"
              onClick={() => handleCategoryClick(category.route)}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 overflow-hidden">

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 animate-pulse delay-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {category.description}
                  </p>

                  {/* Prompt Count Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                      {category.promptCount}
                    </span>

                    {/* Arrow Icon */}
                    <div className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-blue-500/20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm group  rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-400">Total Prompts</p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="bg-gray-800/30 group backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-3xl font-bold text-white mb-2">9</h3>
              <p className="text-gray-400">Categories</p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="bg-gray-800/30 group backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-3xl font-bold text-white mb-2">Daily</h3>
              <p className="text-gray-400">Updates</p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Page;