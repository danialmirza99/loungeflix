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

const MovieList = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
        <ul>
          <li>List</li>
        </ul>
      </Container>
    </>
  );
};

export default MovieList;
