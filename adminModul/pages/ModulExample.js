import React, { useState, useEffect } from 'react';
import API from '../../Api/Events';
import ExampleList from '../ModulExample/ExampleList';
import '../ModulExample/Example.scss';
import Edit from '../ModulExample/Edit';
import Create from '../ModulExample/Create';
export const ModulExample = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState('');
  const [load, setLoad] = useState({ create: false, edit: false });
  const [reload, setReload] = useState(false);

  const setExampleID = (id, prevStatus, status) => {
    setID(id);
    setLoad(prevStatus, status);
  };
  useEffect(() => {
    try {
      API.getEvents('url', setData);
    } catch (err) {
      alert(err.message);
    }
    setReload(false);
  }, [reload]);

  const onReload = () => {
    setReload(true);
  };
  return (
    <div className="board-container">
      <button
        onClick={() => {
          if (load.create === false) {
            setLoad({ create: true, edit: false });
          } else {
            setLoad({ create: false, edit: false });
          }
        }}
      >
        {load.create === true ? 'Cancel' : 'Create new event'}
      </button>
      {load.create === true ? <Create reload={onReload} /> : null}
      {load.edit === true ? <Edit exampleID={id} reload={onReload} /> : null}
      <table>
        <thead>
          <tr className="header-row">
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
            <th>description</th>
          </tr>
        </thead>

        <ExampleList list={data} listID={setExampleID} reload={onReload} />
      </table>
    </div>
  );
};
