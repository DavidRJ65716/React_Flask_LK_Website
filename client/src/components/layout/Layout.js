import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './navbar/NavMenu';
import Footer from './footer/Footer';
//import { SideBar } from './sidebar/SideBar';

export default function Layout(props) {
    
  return (
    <div>
      <NavMenu />
      <Container tag="main">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
  
}
