'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BlurText from '@/TextAnimations/BlurText/BlurText';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const texts = [
  'Selamat datang di perpustakaan kami',
  '私たちの 図書館へ ようこそ',
  'Willkommen in unserer Bibliothek',
  'Welcome to our library',
  'Sugeng rawuh wonten ing perpustakaan kulo'
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[length:20px_20px]" />
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 text-gray-300 absolute top-0 left-0 w-full z-10">
          <div className="font-bold text-lg tracking-wider text-[#27548A]">SATHALLA</div>
        </nav>

        {/* Hero */}
        <main className="flex flex-col justify-center items-center flex-grow text-center mt-24 z-10 relative">
          
          {/* Judul dengan efek glow */}
          <motion.h1  
            className="text-2xl md:text-3xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#3c6fa6] via-[#4f8fc6] to-[#6baae3]
                      drop-shadow-[0_0_10px_rgba(75,180,255,0.8)] animate-glow pl-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <BlurText
              key={index}
              text={texts[index]}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-6xl mb-2 text-[white] "
            />
          </motion.h1>

          {/* Quote tambahan */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mt-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            "Membaca adalah jendela dunia, dan kami membukakan pintunya untukmu."
          </motion.p>

          {/* Tombol Join Club */}
          <div className="flex space-x-3 mt-8">
            <Link href="/books">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-8 py-4 text-lg md:text-xl mt-1 font-semibold rounded-[20px] text-white bg-gradient-to-r from-[#1e3a5f] via-[#27548A] to-[#3c6fa6]
                           shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden group animate-pulse-slow"
              >
                <span className="relative z-10">Join Club</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-white/10 group-hover:w-full transition-all duration-500 ease-in-out rounded-[20px] z-0" />
              </motion.button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
