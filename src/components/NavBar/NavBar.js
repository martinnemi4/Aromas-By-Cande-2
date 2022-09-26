import React from 'react'

/*const NavBar = () => {
  return (
    <div>
        <ul>
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Contacto</li>
        </ul>
    </div>
  )
}
export default NavBar

*/



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"
import {NavLink} from 'react-router-dom'


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container>
        <img src=''></img>
        <Navbar.Brand href="#home">Aromas By Cande</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navegable'>
          <Nav className="me-auto">
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/categoria/frutillas'>Frutillas</NavLink>
            <NavLink to=''>Contacto</NavLink>
            <NavLink to=''>Chocolate</NavLink>
            <NavLink id='cw' to='/cart'><CartWidget/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;