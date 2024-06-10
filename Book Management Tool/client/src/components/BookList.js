// client/src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteBookForm from './DeleteBookForm'; 
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/books`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDeactivate = async (bookId) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/books/deactivate/${bookId}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deactivating book:', error);
    }
  };

  return (
    <div className="book-list" style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: 'black' }}>Book List</h1>
      {books.length === 0 && <p>No books available.</p>}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Type</th>
            <th>Genre</th>
            <th>Publication</th>
            <th>Pages</th>
            <th>Price</th>
            <th>Cover</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.type}</td>
              <td>{book.genre}</td>
              <td>{book.publication}</td>
              <td>{book.pages}</td>
              <td>{book.price}</td>
              <td>{book.image && <img src={book.image} alt={book.title} style={{ width: '50px', height: '50px' }} />}</td>
              <td>
                <Link to={`/update/${book._id}`}>Update</Link>
                <button onClick={() => handleDeactivate(book._id)}>Deactivate</button>
                <DeleteBookForm bookId={book._id} onDelete={fetchBooks} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
