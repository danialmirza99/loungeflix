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
import Silhouette from '../assets/images/Silhouette.jpg'
const styles = {
  sectionStyles: {
    background: `url(${Silhouette})`,
    height: "900px",
    backgroundSize: "cover",
  }}


const Home = () => {
  return (
    <section style={styles.sectionStyles}>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
        <h2 src = ''>Test</h2>
        <div class="movies"></div>
      </Container>
    </section>
  );
};

export default Home;
