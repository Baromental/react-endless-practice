import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  console.log(movieId);

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
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
