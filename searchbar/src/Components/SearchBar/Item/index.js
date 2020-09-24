import React, { useEffect, useState } from 'react';
import API from '../../../Api/Events';
const ItemComp = (props) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    const saveEvents = () => {
      return API.getEvents(
        `/event/${props.match.params.id}`,
        setItem,
        setError
      );
    };
    saveEvents();
    // eslint-disable-next-line
  }, []);
  console.log(error);

  return (
    <div>
      <h1>{item.titel}</h1>
    </div>
  );
};

export default ItemComp;
