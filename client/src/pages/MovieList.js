import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, } from 'react-bootstrap';
import MyComponent from '../utils/api';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { getMovie } from '../utils/api';
import SummerNight from '../assets/images/SummerNight.jpg'

const styles = {
  movieListStyles: {
    background: `url(${SummerNight})`,
    height: "900px",
    marginTop:"-16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  textStyle: {
    color: "gold",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue"
  },
}

const MovieList = () => {
  return (
    <section style={styles.movieListStyles}>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
        <ul style={styles.textStyle}>
          <li>MyComponent</li>
        </ul>
        <MyComponent />
      </Container>
    </section>
  );
};

export default MovieList;
