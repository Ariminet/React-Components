import React from 'react';
import './Toolbar.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';

const Toolbar = ({ drawerClickHandler, show }) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle-button">
          <DrawerToggleButton click={drawerClickHandler} show={show} />
        </div>
        <div className="toolbar_logo">
          <Link to="/">THE LOGO</Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
