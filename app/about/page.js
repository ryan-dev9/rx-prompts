'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  // Animation state for fade-in
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
      <section
        className={`
          max-w-xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8
          transition-all duration-1000 ease-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h1 className="text-4xl font-bold  mb-4 text-center drop-shadow-lg">
          About Me
        </h1>
        <p className="text-lg text-gray-200 mb-6 text-center">
          Hi, I am Ryan Developer, a passionate Front-End Web Developer with expertise in crafting modern, responsive, and interactive websites using the latest technologies like <span className="font-semibold text-blue-300">React.js</span>, <span className="font-semibold text-blue-300">Next.js</span>, and <span className="font-semibold text-blue-300">Tailwind CSS</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/ryan-dev9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 shadow"
          >
            GitHub
          </a>
          <a
            href="/contact"
            className="bg-white/20 hover:bg-white/40 text-blue-200 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 shadow"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
