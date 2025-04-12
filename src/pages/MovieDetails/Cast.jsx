import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(error => setError(error.message));
  }, [movieId]);

  console.log(cast);

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
