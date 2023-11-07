import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { LoginMenu } from '../../api-authorization/LoginMenu';
import './NavMenu.css';
import logo from '../../assets/image/logo/Little_King-logos.jpeg';


export default function NavMenu(props) {
  

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="ng-blue border-bottom box-shadow mb-3" container light>
        <NavbarBrand className='logo_img me-auto' tag={Link} to="/">
          <img height={50} alt="logo" src={logo}/>
            Little King
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="me-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Employee">
                  Name
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Cat">
                  Cat
                </NavLink>
              </NavItem>
            </Nav>      
          </Collapse>
      </Navbar>
    </header>
  );
}
