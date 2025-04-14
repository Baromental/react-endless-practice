import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router';

import { useHttp } from 'hooks/useHttp';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');
  const [movie] = useHttp(fetchMovieDetails, movieId);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
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
      <Suspense fallback={<h1>Loading information...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
