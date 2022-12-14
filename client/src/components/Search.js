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

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchInput}&apikey=c4e6157a`
      );

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const movieData = items.map((movie) => ({
        movieId: movie.imdbID,
        actors: movie.Actors,
        title: movie.Title,
        plot: movie.Plot,
        poster: movie.Poster,
      }));

      setSearchedMovies(movieData);
      console.log("Testing: " + movieData.actors);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
    
  };


  const handleSaveMovie = async (movieId) => {

    const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);


    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {

      const { data } = await saveMovie({
        variables: { newMovie: { ...movieToSave } },
      });

      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
    } catch (err) {
      console.error(err);
    }
    
  };

  

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
          {searchedMovies.length
            ? `Viewing ${searchedMovies.length} results:`
            : 'Search for a movie to begin'}
        </h2>
        <CardColumns>
          {searchedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                {movie.poster ? (
                  <Card.Img src={movie.poster} alt={`The cover for ${movie.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p className='small'>Actors: {movie.actors}</p>
                  <Card.Text>{movie.plot}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveMovie(movie.movieId)}>
                      {savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)
                        ? 'This movie has already been saved!'
                        : 'Save this Movie!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchMovies;