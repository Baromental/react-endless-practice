import React from 'react';
import { Link, Outlet, useParams } from 'react-router';

import { useHttp } from 'hooks/useHttp';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie] = useHttp(fetchMovieDetails, movieId);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Link></Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div>
          <h2>{movie.original_title}</h2>
          <p></p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            Additional information
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
