import React from 'react';
import { Link } from 'react-router';

import { useHttp } from 'hooks/useHttp';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies] = useHttp(fetchTrendingMovies);

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
