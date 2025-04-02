import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  console.log(movies);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
