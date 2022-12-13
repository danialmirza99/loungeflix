import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import MyComponent from '../utils/api';

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
    backgroundPosition: "center",
  }}
  

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput){
      return false;
    }
    else{
      console.log(searchInput);
    }
  }
  return (
    <section style={styles.sectionStyles}>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
            <Col xs={12} md={8}>
            <Form.Control
              name='searchInput'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type='text'
              size='lg'
              placeholder='Select Movie'
            />
            </Col>
            </Form.Row>
          </Form>
          <MyComponent />
        </Container>
      </Jumbotron>
    </section>
  );
};

export default Home;




