import React, { Fragment } from 'react';
import API from '../Api/ExampleAPI';

const ExampleList = ({ list, listID, reload }) => {
  const dataList = list.length
    ? list.map((item) => {
        return (
          <tr className="body-row" key={item._id}>
            <td>{item._id}</td>
            <td>{item.titel}</td>
            <td>{item.dato}</td>
            <td>{item.beskrivelse}</td>
            <td>{item.distance}</td>
            <td>{item.pris}</td>
            <td>{item.antalpladser}</td>
            <td>{item.region.regionnavn}</td>
            <td>{item.region._id}</td>
            <td>
              <button
                onClick={() => {
                  listID(item._id, { create: false, edit: true });
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  API.deleteEvent(`/url/${item._id}`);
                  reload(true);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    : null;
  return (
    <Fragment>
      <tbody>{dataList}</tbody>
    </Fragment>
  );
};

export default ExampleList;
