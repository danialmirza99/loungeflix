import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Silhouette from '../assets/images/Silhouette.jpg'
const styles = {
  sectionStyles: {
    background: `url(${Silhouette})`,
    height: '900px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-20px'
  },
  cardStyles: {
    width: '350px',
    margin: '100px',
    borderStyle: 'solid',
    borderColor: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  },
  imgStyle: {
    maxWidth: '50%',
    height: 'auto',
    marginBottom: '10px',
    marginTop: '10px'
  }
}

const Home = () => {
  const [searchedMovies, setSearchedMovies] = useState({});
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput)
      return false;

    fetch(`http://www.omdbapi.com/?t=${searchInput}&apikey=c4e6157a`)
      .then(res => res.json())
      .then((result) => {
        setSearchedMovies({ title: result.Title, actors: result.Actors, plot: result.Plot, poster: result.Poster })
      })

    setSearchInput('');
  };

  return (
    <section style={styles.sectionStyles}>
      <Jumbotron fluid className='text-light bg-dark'>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Search for Movies!</h1>
            <Form onSubmit={handleFormSubmit}>
              <Form.Row>
                <Col xs={12} md={8}>
                  <Form.Control
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='lg'
                    placeholder='Search for a movie'
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Button type='submit' variant='success' size='lg'>
                    Submit Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Jumbotron>

        <Container>
          <h2>
            {searchedMovies.movie
              ? `Viewing ${searchedMovies.length} results:`
              : 'Search for a movie to begin'}
          </h2>
          <CardColumns>
            {searchedMovies.movie
              ? 'No movie exists'
              : <section>
                <Card style={styles.cardStyles}>
                  <Card.Img variant='top' src={searchedMovies.poster} style={styles.imgStyle} />
                  <Card.Body>
                    <Card.Title>{searchedMovies.title}</Card.Title>
                    <Card.Text>
                      Actors: {searchedMovies.actors}
                    </Card.Text>
                    <Card.Text>
                      Plot: {searchedMovies.plot}
                    </Card.Text>
                    <Button href='reviews' variant='primary'>Reviews</Button>
                  </Card.Body>
                </Card>
                <div
                  className='modal show' style={styles.modalStyles}>
                  {/* Need to generate the modal in the middle of the page when the Review Button is pressed */}
                </div>
              </section>
            }
          </CardColumns>
        </Container>
      </Jumbotron>
    </section>
  );
};

export default Home;