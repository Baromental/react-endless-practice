import React from 'react';
import { useParams } from 'react-router';

import { useHttp } from 'hooks/useHttp';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(fetchMovieReviews, movieId);

  if (!reviews) {
    return <p>Loading...</p>;
  }

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
