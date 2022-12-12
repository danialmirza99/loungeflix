import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, } from 'react-bootstrap';
import MyComponent from '../utils/api';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { getMovie } from '../utils/api';

const MovieList = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
        <ul>
          <li>MyComponent</li>
        </ul>
        <MyComponent />
      </Container>
    </>
  );
};

export default MovieList;
