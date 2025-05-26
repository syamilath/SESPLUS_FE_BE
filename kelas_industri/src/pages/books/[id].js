import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TiltedCard from '@/components/TiltedCard/TiltedCard';
import { motion } from 'framer-motion';
import { BsBook } from 'react-icons/bs';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchBook() {
      try {
        const res = await fetch(`/api/books/${id}`);
        if (!res.ok) throw new Error('Failed to fetch book data');
        const data = await res.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchBook();
  }, [id]);

  if (error)
    return (
      <div className="p-10 text-red-500 text-center text-lg font-semibold">
        Error: {error}
      </div>
    );

  if (!book)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12 flex justify-center items-center">
      <div onClick={() => router.back()} className="cursor-pointer">
        <TiltedCard
          containerHeight="360px"
          containerWidth="360px"
          rotateAmplitude={12}
          scaleOnHover={1.08}
          backgroundColor="#27548A"
          overlayContent={
            <motion.div
              className="text-center w-full px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BsBook className="text-white text-5xl mx-auto mb-4" />
              <h1 className="text-3xl font-extrabold text-white mb-2">{book.title}</h1>
              <p className="text-sm mb-1">
                <span className="font-semibold text-blue-100">Author:</span> {book.author}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-blue-100">Kategori:</span> {book.category}
              </p>
              <p className="mt-5 text-xs text-blue-100 italic">Klik kartu ini untuk kembali</p>
            </motion.div>
          }
        />
      </div>
    </div>
  );
}
