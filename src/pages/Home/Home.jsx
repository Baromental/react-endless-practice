import React from 'react';
import { Link, useLocation } from 'react-router';

import { useHttp } from 'hooks/useHttp';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const location = useLocation();
  const [movies] = useHttp(fetchTrendingMovies);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`movies/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
