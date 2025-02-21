import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhoto = async query => {
  const { data } = await axios.get('', {
    params: {
      key: '42006022-41a20d969efbb704c546dcbcd',
      q: query,
      page: 1,
      per_page: 12,
    },
  });
  console.log(data);
  return data;
};
