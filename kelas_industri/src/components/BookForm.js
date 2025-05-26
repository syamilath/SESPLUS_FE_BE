import { useState, useEffect } from "react";

export default function BookForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (initialData.title || initialData.author || initialData.category) {
      setTitle(initialData.title || '');
      setAuthor(initialData.author || '');
      setCategory(initialData.category || '');
    }
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, category });
  };

  const isEditing = Boolean(initialData.title || initialData.author || initialData.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#27548A] to-[#4A7DB8] drop-shadow-lg">
          {isEditing ? 'Edit Buku' : 'Tambah Buku'}
        </h2>
        <form onSubmit={handlerSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium mb-2">Judul Buku:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Masukkan judul"
              className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#27548A] transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="author" className="block text-sm font-medium mb-2">Penulis:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              placeholder="Masukkan nama penulis"
              className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#27548A] transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium mb-2">Kategori:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              placeholder="Masukkan kategori buku"
              className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#27548A] transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-[#27548A] to-[#4A7DB8] hover:from-[#1E3F66] hover:to-[#3A6496] rounded-lg font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {isEditing ? 'Update Buku' : 'Tambah Buku'}
          </button>
        </form>
      </div>
    </div>
  );
}
