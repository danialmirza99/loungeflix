import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_MOVIE } from '../utils/mutations';

const SearchMovies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());
  const [saveMovie] = useMutation(SAVE_MOVIE);

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput)
      return false;

    try {
      var val = {};
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchInput}&apikey=c4e6157a`)
        .then(res => res.json())
        .then((result) => {
          val = result;
        });
      console.log(val);

      const movieData = {
        movieId: val.imdbID,
        actors: val.Actors,
        title: val.Title,
        plot: val.Plot,
        poster: val.Poster,
      };

      setSearchedMovies(movieData);
      console.log(movieData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // const handleSaveMovie = async (movieId) => {
  //   const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token)
  //     return false;

  //   try {

  //     const { data } = await saveMovie({ variables: { newMovie: { ...movieToSave } }, });

  //     setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
  //   } catch (err) {
  //     console.error(err);
  //   }

  // };

  const styles = {
    cardStyles: {
      width: "350px",
      margin: "100px",
      borderStyle: "solid",
      borderColor: "red",
      textAlign: "center",
      marginBottom: "10px",
    },
    imgStyle: {
      maxWidth: "50%",
      height: "auto",
      marginBottom: "10px",
      marginTop: "10px"
    }
  }

  return (
    <>
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
                <Card.Img variant="top" src={searchedMovies.poster} style={styles.imgStyle} />
                <Card.Body>
                  <Card.Title>{searchedMovies.title}</Card.Title>
                  <Card.Text>
                    Actors: {searchedMovies.actors}
                  </Card.Text>
                  <Card.Text>
                    Plot: {searchedMovies.plot}
                  </Card.Text>
                  <Button href="google.com" variant="primary">Reviews</Button>
                </Card.Body>
              </Card>
              <div
                className="modal show" style={styles.modalStyles}>
                {/* Need to generate the modal in the middle of the page when the Review Button is pressed */}
              </div>
            </section>
          }
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchMovies;