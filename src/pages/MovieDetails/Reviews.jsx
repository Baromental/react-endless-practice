import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  console.log(reviews);

  return <div>Reviews</div>;
};

export default Reviews;
