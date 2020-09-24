import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:5021',
});

export default {
  getExamples: (url, setState) =>
    API.get(`${url}`).then((res) => {
      setState(res.data);
    }),
  getExampleById: (url, setState) =>
    API.get(`${url}`).then((res) => {
      setState(res.data);
    }),
  createExample: (url, payload) => {
    API.post(`${url}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      withCredentials: true,
    });
  },
  editExample: (url, payload) => {
    API.put(`${url}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      withCredentials: true,
    });
  },

  deleteExample: (url) => {
    API.delete(`${url}`, { withCredentials: true });
  },
};
