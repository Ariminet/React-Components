import EventApi from './EventApi';

export const getEvents = (URL, setState, setError) => {
  return EventApi.get(URL)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      setError(err.message);
    });
};

export const getBoard = (URL, setState) => {
  return EventApi.get(URL).then((res) => {
    setState(res.data);
  });
};
