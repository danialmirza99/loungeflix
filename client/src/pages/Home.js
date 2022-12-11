import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from 'react-bootstrap';
import { useMutation } from '@apollo/client';


const Home = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
        <h2 src = ''>Test</h2>
        <div class="movies"></div>
      </Container>
    </>
  );
};

export default Home;
