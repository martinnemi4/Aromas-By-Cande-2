import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"
import {NavLink} from 'react-router-dom'


function BasicExample() {
  return (
    <div id='navbarcontain'>
    <Navbar  expand="lg" >
      <Container className='nav'>
        <NavLink to='/'>
        <p className='logo'>Aromas By Cande</p>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navegable'>
          <Nav className="me-auto">
            <NavLink to='/'><p>Inicio</p></NavLink>
            <NavLink to='/categoria/frutillas'>Frutillas</NavLink>
            <NavLink to='/categoria/chocolates'>Chocolate</NavLink>
            <NavLink to='/categoria/alfajores'>Alfajores</NavLink>
            <NavLink to='/categoria/limon'>Limon / Merengue</NavLink>
            <NavLink to='/contacto'>Contacto</NavLink>
            <NavLink to='/cart'><CartWidget/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;