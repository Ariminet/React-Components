import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5021',
});

// const API = axios.create({
//   baseURL: 'http://localhost:5021',
// });

// export default {
//   getEvents: () => API.get('/event'),
// };
