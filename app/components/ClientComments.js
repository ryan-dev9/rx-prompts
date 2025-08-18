"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const comments = [
  {
    name: "Aarav Sharma",
    text: "This blog really helped me understand the topic in depth. The examples were spot on and easy to follow!",
  },
  {
    name: "Priya Verma",
    text: "The article was well-structured and gave me new insights. Definitely looking forward to more content like this.",
  },
  {
    name: "Rahul Mehta",
    text: "Clear explanations and practical tips. It really made the subject much less intimidating for me.",
  },
  {
    name: "Sneha Kapoor",
    text: "Loved how the article was simple yet informative. Perfect for both beginners and experienced readers.",
  },
  {
    name: "Karan Singh",
    text: "Amazing work! Your content is engaging and easy to digest, even for a beginner like me.",
  },
];

export default function ClientComments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const commentsPerPage = 3;
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % comments.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const getCurrentPageComments = () => {
    const startIndex = currentIndex * commentsPerPage;
    return comments.slice(startIndex, startIndex + commentsPerPage);
  };

  return (
    <section className="bg-transparent py-12">
      <div className="max-w-[85%] mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-[Orbitron]">
            Client Comments
          </h2>
          <p className="text-gray-400 font-medium text-xl">
            What our readers say about us
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <div className="relative overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {comments[currentIndex].name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {comments[currentIndex].text}
                </p>
              </motion.div>
            </div>
            <div className="flex justify-center space-x-2 mt-6">
              {comments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? "bg-blue-500" 
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {getCurrentPageComments().map((comment, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-blue-600 hover:border-blue-500"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    {comment.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{comment.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center space-x-2">
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentIndex(pageIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === pageIndex
                      ? "bg-blue-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}