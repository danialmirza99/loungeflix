import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { test } from '../utils/api';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import SavedMovies from '../components/Movie';
import SearchMovies from '../components/Search';

import {
  Jumbotron,
  Container,
  Col,
  Form,
  // Button,
  // Card,
  // CardColumns,
} from 'react-bootstrap';

import Silhouette from '../assets/images/Silhouette.jpg'
const styles = {
  sectionStyles: {
    background: `url(${Silhouette})`,
    height: "900px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "-20px"
  }
}

const Home = () => {
  //const [searchedMovies, setSearchedMovies] = useState([]);
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    
    sessionStorage.setItem("searchValue", searchInput);

    // fetch(`http://www.omdbapi.com/?t=${searchInput}&apikey=c4e6157a`)
    //   .then(res => res.json())
    //   .then((result) => {
    //     setItems([result.Title, result.Actors, result.Plot, result.Poster]);
    //   })
  };

  return (
    <section style={styles.sectionStyles}>
      <Jumbotron fluid className='text-light bg-dark'>
        {/* <Container>
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
        </Container> */}
        <SearchMovies />
        {/* <SavedMovies /> */}
      </Jumbotron>

      {/* <Container>
        <ul>{items.map(item => <li> {item}</li>)}</ul>
      </Container> */}
    </section>
  );
};

export default Home;