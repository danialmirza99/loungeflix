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
import Makima from '../assets/images/Makima.jpg'
const styles = {
  sectionStyles: {
    background: `url(${Makima})`,
    height: "900px",
    backgroundSize: "cover",
  }}


const Login = () => {
  return (
    <section style={styles.sectionStyles}>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
        <h2></h2>
      </Container>
    </section>
  );
};

export default Login;
