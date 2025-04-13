import React from 'react';
import { useParams } from 'react-router';

import { useHttp } from 'hooks/useHttp';
import { fetchMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchMovieCredits, movieId);

  if (!cast) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {cast.length === 0 ? (
          <p> No information about cast yet.</p>
        ) : (
          cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>
                {actor.name}
                <p>Character: {actor.character}</p>
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
