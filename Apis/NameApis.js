const API = axios.create({
  baseURL: 'URLNAME',
});

export default {
  getName: () => API.get('/ExtendedURLName'),
  // params example
  // session = {params = withCredentials: set it to true}
  getLogin: () => API.post('/ExtendedURLName', { withCredentials: true }),
  // submit form example
  // payload = name of form useState with {userData}
  postUser: (payload) => API.post('/ExtendedURLName', payload),
  // Delete item
  deleteUser: (userID, authLogin) =>
    API.delete(
      `/ExtendedURLName/${userID}`,
      authLogin,
      'if jwt or sessions-cookies',
      {
        withCredentials: true,
      }
    ),
  // Edit item
  editName: (userId, payload) =>
    API.put(
      `/ExtendedURLName/${userID}`,
      authLogin,
      'if jwt or sessions-cookies',
      {
        withCredentials: true,
      },
      payload
    ),
};

// How to use
import API from '../Apis/NameApis.js';

useEffect(() => {
  API.getName()
    .then((res) => {
      setName(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  API.getLogin()
    .then((res) => {
      setLoggedIn(true);
    })
    .catch((err) => {
      console.log(err.message);
    });

  API.postUser(formData === payload).catch((err) => {
    console.log(err.message);
  });
  API.deleteUser(user._id, authLogin).catch((err) => {
    console.log(err.message);
  });
  API.editName(user._id, formData === payload).catch((err) => {
    console.log(err.message);
  });
}, []);
