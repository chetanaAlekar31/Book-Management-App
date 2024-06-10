// client/src/components/BookDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-detail" style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ color: 'black' }}>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Type: {book.type}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication: {book.publication}</p>
      <p>Number of Pages: {book.pages}</p>
      <p>Price: {book.price}</p>
      {book.image && <img src={book.image} alt={book.title} style={{ width: '200px', height: '200px' }} />}
    </div>
  );
};

export default BookDetail;
