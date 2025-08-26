"use client"
import { motion } from "motion/react"
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import promptsData from "../../data/prompts.json";
import Image from "next/image";


export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const [copiedId, setCopiedId] = useState(null);
  const [expandedPrompts, setExpandedPrompts] = useState({});

  const togglePrompt = (id) => {
    setExpandedPrompts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      'business-marketing': 'Business & Marketing',
      'content-creation': 'Content Creation',
      'programming-tech': 'Programming & Tech',
      'education-learning': 'Education & Learning',
      'image-generation': 'Image Generation',
      'data-analysis': 'Data Analysis',
      'health-wellness': 'Health & Wellness',
      'research-writing': 'Research and Writing'
    };
    return categoryMap[category] || category;
  };

  const prompts = promptsData[params.category] || [];
  const categoryName = getCategoryDisplayName(params.category);

  const copyToClipboard = async (prompt, id) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'from-green-500 to-green-600',
      'Intermediate': 'from-yellow-500 to-orange-500',
      'Advanced': 'from-red-500 to-red-600'
    };
    return colors[difficulty] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex px-2 py-1 rounded-full bg-black items-center fixed z-100 border border-blue-300  text-gray-400 hover:text-white mb-8 transition-colors duration-300"
          >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Categories
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold font-[Orbitron] bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            {prompts.length} Professional AI Prompts
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Prompts Grid */}
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
          {prompts.map((prompt, index) => (
            <motion.div
            key={prompt.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {prompt.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getDifficultyColor(prompt.difficulty)} text-white`}>
                      {prompt.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prompt / Image Box */}
              <div className="bg-gray-900/50 rounded-xl p-4 mb-4 border border-gray-700/30">
                {params.category === "image-generation" && prompt.url ? (
                  <>
                    {expandedPrompts[prompt.id] ? (
                      <p className="text-gray-300 leading-relaxed font-mono text-xl">
                        {prompt.prompt}
                      </p>
                    ) : (
                      // In app/prompts/[category]/page.js - Replace the Image component usage
                      <Image
                      src={prompt.url}
                      alt={prompt.title}
                      width={500}
                        height={300}
                        className="rounded-lg w-full object-top h-64 object-cover"
                        priority={index < 2} // Priority load first 2 images
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}

                    {/* Toggle Buttons */}
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => setExpandedPrompts(prev => ({ ...prev, [prompt.id]: false }))}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold ${!expandedPrompts[prompt.id] ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"}`}
                        >
                        Preview
                      </button>
                      <button
                        onClick={() => setExpandedPrompts(prev => ({ ...prev, [prompt.id]: true }))}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold ${expandedPrompts[prompt.id] ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"}`}
                      >
                        Prompt
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-300 leading-relaxed font-mono text-xl">
                      {expandedPrompts[prompt.id] || prompt.prompt.length <= 150
                        ? prompt.prompt
                        : `${prompt.prompt.slice(0, 125)}...`}
                    </p>
                    {prompt.prompt.length > 150 && (
                      <button
                      onClick={() => togglePrompt(prompt.id)}
                      className="mt-2 border border-blue-600 px-2 py-1 rounded duration-300 text-blue-600 hover:text-blue-300 text-lg"
                      >
                        {expandedPrompts[prompt.id] ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {prompt.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-xs border border-blue-600/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Copy Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${copiedId === prompt.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                }`}
                >
                {copiedId === prompt.id ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Prompt
                  </div>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {prompts.length === 0 && (
          <motion.div
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
            >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon!</h3>
            <p className="text-gray-400 mb-8">
              We are working on adding prompts for this category.
            </p>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
              Back to Categories
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
