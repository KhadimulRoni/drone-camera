import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../../images/logo.jpg';

const Header = () => {
   return (
      <>
         <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container className="item py-2">
               <Navbar.Brand href="#home">
                  <img className="logo" src={logo} alt="DroneBD" />
               </Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={Link} to="/home">
                     Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/drones">
                     Drones
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                     AboutUs
                  </Nav.Link>

                  <Navbar.Text className="px-2">
                     Signed in as:{' '}
                     <a href="#login" className="text-white">
                        Khadimul
                     </a>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
