import axios from 'axios';

const API_KEY = '320f6ab2';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const API = {
  getMovies: (input, page) => {
    return axios.post(`${API_URL}&s=${input}&page=${page}`)
  },
  getMovieDetail: (id) => {
    return axios.post(`${API_URL}&i=${input}`)
  }
};

export default API;