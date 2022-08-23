import React, { useState, useEffect } from 'react'
import MovieCard from '../MovieCard'
import API from '../../utils/API'
import './style.css'

export default function MovieList(props) {
  const [results, setResults] = useState({})

  useEffect(() => {
    const fetchData = async (input) => {
      await API.getMovies(input, 1)
        .then(({ data }) => setResults(data))
        .catch((err) => console.error(err))
    }
    fetchData(props.input)
  }, [props.input])

  useEffect(() => {
    console.log(results);
  }, [results, setResults])

  return (
    <div className='movie-list'>
      {(results.Search && results.Search.length>0) &&
          results.Search.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                id={movie.imdbID}
                text={`${movie.Title} (${movie.Year})`}
                poster={movie.Poster}
              />
            )
          })
      }
    </div>
  )
}
