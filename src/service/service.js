import axios from 'axios';

//Работает

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '19731613-0dd9928f669764263ad400b12';

// const fetchImages = ({ searchQuery, page }) => {
//   return axios
//     .get(
//       `?q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`,
//     )
//     .then(({ data }) => data.hits);
// };

//НЕ работает

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19731613-0dd9928f669764263ad400b12';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = async ({ searchQuery, page }) => {
  try {
    const { data } = await axios.get('', {
      params: { q: searchQuery, page },
    });
    return data.hits;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

// Не работает

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '19731613-0dd9928f669764263ad400b12';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// const fetchImages = ({ searchQuery, page }) => {
//   return axios
//     .get('', {
//       params: { searchQuery, page },
//     })
//     .then(res => res.data.hits);
// };

export default fetchImages;
