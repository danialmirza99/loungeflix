import React from 'react';

const styles = {
  navbarStyle: {
    background: 'skyblue',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  activePage: {
    margin: '10px',
    color: 'goldenrod',
    textShadow: '2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue',
  },
};

function Navbar({ setCurrentPage, currentPage }) {
  return (
    <nav style={styles.navbarStyle}>
      <a
        href='#'
        className='linkStyle'
        onClick={() => {
          setCurrentPage('movieList');
        }}
      >
        Movie List
      </a>
      <a
        href='#'
        className='linkStyle'
        onClick={() => {
          setCurrentPage('home');
        }}
      >
        Home
      </a>
      <a
        href='#'
        className='linkStyle'
        onClick={() => {
          setCurrentPage('loginSignUp');
        }}
      >
        Login/Sign Up
      </a>
    </nav>
  );
}

export default Navbar;
