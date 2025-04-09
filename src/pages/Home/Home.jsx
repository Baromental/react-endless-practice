import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  console.log(movies);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
