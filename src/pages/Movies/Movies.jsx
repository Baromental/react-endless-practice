import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router';

import Form from './Form';

import { useHttp } from 'hooks/useHttp';
import { fetchSearchMovies } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');
  const [movies] = useHttp(fetchSearchMovies, query);
  return (
    <div>
      <ul>
        <Form setSearchParams={setSearchParams} />
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={movie.id.toString()}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
