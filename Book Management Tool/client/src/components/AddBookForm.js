// client/src/components/AddBookForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBookForm = () => {
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    type: '',
    genre: '',
    publication: '',
    pages: '',
    price: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/books`, newBook);
      navigate('/');
    } catch (error) {
      console.error('Error adding book:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-form" style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ color: 'purple' }}>Add Book</h1>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Title:
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Author:
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Type:
        <input
          type="text"
          value={newBook.type}
          onChange={(e) => setNewBook({ ...newBook, type: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Genre:
        <input
          type="text"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Publication:
        <input
          type="text"
          value={newBook.publication}
          onChange={(e) => setNewBook({ ...newBook, publication: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Number of Pages:
        <input
          type="number"
          value={newBook.pages}
          onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Price:
        <input
          type="number"
          value={newBook.price}
          onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Image URL:
        <input
          type="text"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      {loading ? (
        <p style={{ margin: '16px', color: '#2ecc71' }}>Adding book...</p>
      ) : (
        <div style={{ marginTop: '16px' }}>
          <button
            onClick={handleAdd}
            style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
              fontWeight: 'bold',
            }}
          >
            Add Book
          </button>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBookForm;
