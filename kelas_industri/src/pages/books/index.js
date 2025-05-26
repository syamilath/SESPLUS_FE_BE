import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import BlurText from '@/TextAnimations/BlurText/BlurText';




export default function Booklist() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // Fetch books
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/books?search=${search}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Gagal memuat data.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [search]);

  const deleteBook = async (id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus buku ini?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/books');
      } else {
        const data = await response.json();
        setError(data.message || 'Gagal menghapus buku.');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError('Gagal menghapus buku.');
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <BlurText
          text="Book Collection"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl font-bold mb-12 text-center justify-center"
        />

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari judul buku..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Tombol Tambah Buku */}
        <div className="flex justify-end mb-10">
          <Link href="/books/add">
            <div className="flex items-center gap-3 group cursor-pointer">
              <button title="Add New" className="outline-none hover:rotate-90 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  className="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
                >
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" strokeWidth="1.5"></path>
                  <path d="M8 12H16" strokeWidth="1.5"></path>
                  <path d="M12 16V8" strokeWidth="1.5"></path>
                </svg>
              </button>
              <span className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">ADD BOOK</span>
            </div>
          </Link>
        </div>

        {/* Error */}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* Tidak ada buku */}
        {books.length === 0 && (
          <p className="text-center text-gray-400">Tidak ada buku ditemukan.</p>
        )}

        {/* Daftar Buku */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b, index) => (
            <div key={b.id}>
              <Link href={`/books/${b.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  className="relative bg-gray-800/50 backdrop-blur-md text-white rounded-2xl overflow-hidden group hover:bg-gray-700/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
        
                  <div className="flex items-center space-x-3 p-4 pb-0">
                   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 014 16.5v-12z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#27548A] transition-colors">
                      {b.title}
                    </h3>
                  </div>

                  <div className="p-6 pt-2 flex flex-col justify-between h-full">
                    <div className="mb-4">
                      <p className="text-sm text-gray-300 mb-2">By {b.author}</p>
                      <p className="text-sm text-gray-300">Kategori: {b.category}</p>
                    </div>
                  
                    <div className="flex justify-between items-center text-base font-medium space-x-4 px-1">
                      <Link
                        href={`/books/edit/${b.id}`}
                        className="text-[#27548A] hover:text-[#1E3F66] transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteBook(b.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>


                  <div className="absolute top-0 left-0 w-2 bg-gradient-to-b from-[#27548A] to-[#4A7DB8] h-full transform group-hover:scale-y-110 transition-transform duration-300 origin-top"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[#27548A]/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-8 group-hover:h-0 group-hover:rounded-full group-hover:bg-[#27548A]/40 group-hover:-translate-x-0 group-hover:-translate-y-0 transition-all duration-500"></div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
