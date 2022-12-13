// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import {
  Jumbotron,
  Container,
  // Col,
  // Form,
  // Button,
  // Card,
  // CardColumns,
} from 'react-bootstrap';
//import { useMutation } from '@apollo/client';
import Titanic from '../assets/images/Titanic.jpg'

const styles = {
  reviewPageStyles: {
    background: `url(${Titanic})`,
    height: "900px",
    marginTop: "-20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
}

const ReviewPage = () => {
  return (
    <section style={styles.reviewPageStyles}>
      <Jumbotron fluid className='text-light bg-dark'></Jumbotron>
      <Container>
      </Container>
    </section>
  );
};

export default ReviewPage;
