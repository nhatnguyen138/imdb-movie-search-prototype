import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './style.css';

export default function App() {
  const [input, setInput] = useState('');

  const handleSubmit = (value) => {
    setInput(value)
  };

  return (
    <div className='container'>
      <SearchBar
        handleSubmit={handleSubmit}
      />
      <MovieList
        input={input}
      />
    </div>
  );
}
