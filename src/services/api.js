import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTM1M2YyYWMwYWI3ZDk4YThlN2E5Y2RjMzVhMjk0YSIsInN1YiI6IjY1ZGY2Y2Q3YTliOWE0MDE0YThlMjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uN2kueWrb_iU8a5pq2oQ8enPNjekCz6SDXHHaVkpRKI',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('trending/all/day', options);
  console.log(data);
  return data.results;
};

export const fetchSearchMovies = async query => {
  const { data } = await axios.get('search/movie', options);
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data;
};
