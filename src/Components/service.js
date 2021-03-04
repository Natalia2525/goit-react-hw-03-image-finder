import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '19731613-0dd9928f669764263ad400b12';

const fetchImages = ({ searchQuery, page }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`,
    )
    .then(({ data }) => data.hits)
};

export { fetchImages };
