import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { LoginMenu } from '../../api-authorization/LoginMenu';
import './NavMenu.css';
import logo from '../../../assets/image/logo/Little_King-logos.jpeg';


export default function NavMenu(props) {
  

  const [isOpen, setIsOpen] = useState(true);

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-lg ng-blue border-bottom box-shadow mb-3" container light>
        <NavbarBrand className='logo_img' tag={Link} to="/"><img height={50} alt="logo" src={logo}/>Little King</NavbarBrand>
        <NavbarToggler onClick={null} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/Employee">Name</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/Cat">Cat</NavLink>
            </NavItem>       
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
  
}
