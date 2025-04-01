import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import Cast from 'pages/MovieDetails/Cast';
import Reviews from 'pages/MovieDetails/Reviews';
import NotFound from 'components/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
