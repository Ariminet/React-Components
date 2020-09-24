import React from 'react';
import './SideDrawer.scss';
import { Link } from 'react-router-dom';

const SideDrawer = ({ show, click }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/home" onClick={click}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" onClick={click}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
