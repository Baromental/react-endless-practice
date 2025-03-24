import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

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
