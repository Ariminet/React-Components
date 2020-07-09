import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../SCSS/NavBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../SCSS/StickyHeader.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Headroom from 'react-headroom';

export const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div id="header">
      <Headroom>
        <Navbar dark expand="md">
          <NavbarBrand tag={Link} exact to="/">
            <img
              id="brand"
              src="odder-massage-logo.png"
              alt="Odder Massage Logo"
            />
          </NavbarBrand>
          <NavbarToggler
            id="burger-menu"
            onClick={toggleNavbar}
            className="mr-2"
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav id="menu" navbar>
              <NavItem className="menu-item">
                <NavLink className="nav-Link active" tag={Link} to="/" exact>
                  FORSIDE
                </NavLink>
              </NavItem>
              <NavItem className="menu-item">
                <NavLink className="nav-Link" tag={Link} to="/om" exact>
                  OM MIG
                </NavLink>
              </NavItem>
              <NavItem className="menu-item">
                <NavLink className="nav-Link sm_booking" href="#">
                  BOOK EN TID
                </NavLink>
              </NavItem>
              <NavItem className="menu-item">
                <NavLink className="nav-Link" tag={Link} to="/kontakt" exact>
                  KONTAKT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Headroom>
    </div>
  );
};
