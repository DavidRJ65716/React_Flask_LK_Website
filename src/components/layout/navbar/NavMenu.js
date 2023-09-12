import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { LoginMenu } from '../../api-authorization/LoginMenu';
import './NavMenu.css';
import logo from '../../../assets/image/logo/Little_King-logos.jpeg';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  //home/djking/projects/Practice_Website/ClientApp/src/components/layout/navbar/NavMenu.js
  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-lg ng-blue border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/"><img height={50} alt="logo" src={logo}/>Practice Website</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Employee">Name</NavLink>
              </NavItem>             
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
