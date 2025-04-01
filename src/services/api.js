import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('trending/all/day', {
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTM1M2YyYWMwYWI3ZDk4YThlN2E5Y2RjMzVhMjk0YSIsInN1YiI6IjY1ZGY2Y2Q3YTliOWE0MDE0YThlMjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uN2kueWrb_iU8a5pq2oQ8enPNjekCz6SDXHHaVkpRKI',
    },
  });
  console.log(data);

  return data.results;
};

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews

export const fetchPictures = async (query, page) => {
  const { data } = await axios.get('api/', {
    params: {
      key: '42006022-41a20d969efbb704c546dcbcd',
      q: query,
      page: page,
      per_page: 15,
    },
  });
  return data;
};
