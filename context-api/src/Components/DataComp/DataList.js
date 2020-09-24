import React, { useContext } from 'react';

// DataContext is the context you want to use in this component
import { DataContext } from '../../Context/DataContext';

const DataList = () => {
  // States the values from the array in DataContext you want to use
  const [data, setData] = useContext(DataContext);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
        </div>
      ))}
    </div>
  );
};

export default DataList;
