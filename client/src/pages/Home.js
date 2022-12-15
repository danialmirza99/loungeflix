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
    height: '600px',
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
  },
  linkFont: {
    margin: '10px',
    marginTop: '20px',
    color: 'goldenrod',
    textShadow: '2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue',
  },
}

const Home = () => {
  const [searchedMovies, setSearchedMovies] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [reviewShow, setReview] = useState(true)
  const [reviewInput, setReviewInput] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput)
      return false;

    fetch(`http://www.omdbapi.com/?t=${searchInput}&apikey=c4e6157a`)
      .then(result => result.json())
      .then(result => {
        setSearchedMovies({ title: result.Title, actors: result.Actors, plot: result.Plot, poster: result.Poster })
      })
    setSearchInput('');
    setReviewInput('');
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    setReview(false)
  }

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
            {searchedMovies.title
              ? `Viewing results for ${searchedMovies.title}`
              : 'Search for a movie to begin.'}
          </h2>
          <CardColumns>
            {!searchedMovies.title
              ? null
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
                    <Form onSubmit={handleReviewSubmit}>
                      {reviewShow
                        ? <Form.Row>
                          <Col xs={12} md={8}>
                            <Form.Control
                              name='reviewInput'
                              value={reviewInput}
                              onChange={(e) => { setReviewInput(e.target.value) }}
                              type='text'
                              size='lg'
                              placeholder='Add your review here.'
                            />
                          </Col>
                          <Col xs={12} md={4}>
                            <Button type='submit' variant='success' size='lg'>
                              Submit Review
                            </Button>
                          </Col>
                        </Form.Row>
                        : null
                      }
                    </Form>
                    <Card.Text>
                      Review: {reviewInput}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </section>
            }
          </CardColumns>
        </Container>
      </Jumbotron>
    </section>
  );
};

export default Home;