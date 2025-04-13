import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link } from 'react-router';
import { fetchSearchMovies } from 'services/api';
import Form from './Form';

const Movies = () => {
  const [movies, setMovies] = useHttp(fetchSearchMovies);
  return (
    <div>
      <ul>
        <Form />
        {movies?.map(movie => (
          <li key={movie.id}>
            {movie.title || movie.name}
            <Link to={movie.id.toString()}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
