import axios from 'axios';

const apiKey = '357fc1f0e2949fd584ecf1a7a29aac73';
const baseUrl = 'https://api.themoviedb.org/3';

export const apiCall = (url, data, headers, method) => axios({
  method,
  url: `${baseUrl}${url}?api_key=${apiKey}`,
  data,
  headers
});
