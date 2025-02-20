import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPosts = async () => {
  const { data } = await axios.get('posts', {
    params: {
      page: 0,
      per_page: 8,
    },
  });
  console.log(data);
  return data;
};
