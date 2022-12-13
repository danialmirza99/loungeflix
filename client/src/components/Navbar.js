import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Api } from '../utils/api'
import Logo from '../assets/images/Lounge_Flix_Logo.jpg'
//import SignUpForm from './SignupForm';
//import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const styles = {
  navbarStyle: {
    background: 'midnightblue',
  },
  linkFont:{
    margin: '10px',
    marginTop: '200px',
    color: "goldenrod",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue",
  },
};

 const MovieNavbar=()=>{
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <section>

    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container fluid>
          <Nav className='ml-auto' style={styles.navbarStyle}>
          <Navbar.Brand>
          <Nav.Link as={Link} to='/'>
          <img
            src= {Logo}
            width="125"
            height="75"
            className="d-inline-block align-top"
            alt="LoungeFlix logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Nav.Link as={Link} to='/'style={styles.linkFont}>
          Home
        </Nav.Link>
            {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/movies'style={styles.linkFont}>
                    MovieList
                  </Nav.Link>
                  <Nav.Link as={Link} to='/reviews'style={styles.linkFont}>Reviews
                  </Nav.Link>
                  <Nav.Link onClick={logout}style={styles.linkFont}>Logout</Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link as={Link} to='/login'style={styles.linkFont}> Login
                </Nav.Link>
                <Nav.Link as={Link} to='/signup'style={styles.linkFont}>Sign Up
                </Nav.Link>
                </>
              )}
            
          </Nav>
        
      </Container>
    </Navbar>
    
    </section>
    
  
);
};

export default MovieNavbar;