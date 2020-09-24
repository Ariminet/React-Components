import React, { createContext, useEffect, useState } from 'react';

// Create the usability for context
export const DataContext = createContext();

// Context Data it has to provide and how
export const DataProvider = (props) => {
  // DATA  ( useEffect to get from a API)
  const [data, setData] = useState([
    {
      title: 'First Slide',
      subtitle: 'is it working?',
    },
    {
      title: 'Second Slide',
      subtitle: 'ohhh yeah',
    },
    {
      title: 'Third Slide',
      subtitle: 'last one! ✨',
    },
  ]);

  // useEffect(() => {
  //   ApiCall.get('url').then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // Return renders DataContext.Provider and the value is Array to get the functionality of both the state and set of the state
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
