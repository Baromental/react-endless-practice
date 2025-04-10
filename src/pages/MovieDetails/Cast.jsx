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
      .then(data => setCast(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  console.log(cast);

  return <div></div>;
};

export default Cast;
