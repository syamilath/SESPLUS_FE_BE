import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookForm from '@/components/BookForm';
import { getBook, updateBook } from '../../../../lib/api/books';
export default function EditBook() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const _getBookById = async () => {
    if (!id) return;

    try {
      const data = await getBook(id);
      setBook(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    _getBookById();
  }, [id]);

  const handleUpdateBook = async (data) => {
    try {
      await updateBook(id, data.title, data.author, data.category);
      router.push('/books');
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error) return <div className="text-red-500 text-center mt-8">Error: {error}</div>;

  return <BookForm initialData={book} onSubmit={handleUpdateBook} />;
}
