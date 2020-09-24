import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Api/Events';
import './style.scss';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  console.log(search);
  const [list, setList] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    API.getEvents('/event', setList, setError);
  }, []);
  console.log(error);

  return (
    <div className="search-bar-container">
      <form>
        <input
          autoComplete="off"
          type="text"
          name="search"
          className="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">SØG</button>
      </form>
      <h1>hello</h1>
      <ul className="search-list-container">
        {list
          .filter((item) => {
            if (!list) return true;
            if (search === '') return false;
            if (
              item.titel.toLowerCase().includes(search.toString().toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((item) => {
            return (
              <li key={item._id}>
                <Link to={`/item/${item._id}`}>{item.titel}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
