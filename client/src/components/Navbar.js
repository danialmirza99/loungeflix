import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Api } from '../utils/api'
//import SignUpForm from './SignupForm';
//import LoginForm from './LoginForm';

//import Auth from '../utils/auth';

const styles = {
  navbarStyle: {
    background: 'skyblue',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  activePage:{
    margin: '10px',
    color: "goldenrod",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue",
  },
};

 const MovieNavbar=()=>{
 
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/login'> Login
              </Nav.Link>
              <Nav.Link as={Link} to='/'>Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to='/movies'>Movielist
              </Nav.Link>
              <Nav.Link as={Link} to='/reviews'>Reviews
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
};

export default MovieNavbar;