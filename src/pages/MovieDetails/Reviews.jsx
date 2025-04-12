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

  return (
    <div>
      <ul>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              Author: {review.author}
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
