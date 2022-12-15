import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { test } from '../utils/api';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import SearchMovies from '../components/Search';

import Auth from '../utils/auth';
import { saveMovie, searchMovies } from '../utils/api';
import { saveMovieIds, getSavedMovieIds, saveMovie2 } from '../utils/localStorage';
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
  // create state for holding returned  api data
  const [searchedMovies, setSearchedMovies] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved Title values
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  // set up useEffect hook to save `savedMovieIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

  // create method to search for movies and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    // const search = async () => {
    try {
      const response = await searchMovies(searchInput)
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      //   const json = await response.json();
      //   console.log(json);

      //   //const { items } = json;
      //   const movieData = json.map((movie) => ({
      //     title: movie.Title,
      //     actors: movie.Actors,
      //     plot: movie.Plot,
      //     poster: movie.Poster,
      //   }));
      //   console.log(movieData)
      //   setSearchedMovies(movieData);
      // }
      // search()
      //console.log(search());
      const { items } = await response.json();

      const movieData = items.map((movie) => ({
        title: movie.Title,
        actors: movie.Actors,
        plot: movie.Plot,
        poster: movie.Poster,
      }));

      setSearchedMovies(movieData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a movie to our database
  const handleSaveMovie = async (Title) => {
    // find the movie in `searchedMovies` state by the matching id
    const movieToSave = searchedMovies.find((movie) => movie.Title === Title);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveMovie2(movieToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if movie successfully saves to user's account, save movie id to state
      setSavedMovieIds([...savedMovieIds, movieToSave.Title]);
    } catch (err) {
      console.error(err);
    }
  };
  // const [searchedMovies, setSearchedMovies] = useState([]);
  // const [searchInput, setSearchInput] = useState('');
  // const [items, setItems] = useState([]);


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) 
  //     return false;

  //   //sessionStorage.setItem("searchValue", searchInput);

  //   fetch(`http://www.omdbapi.com/?t=${searchInput}&apikey=c4e6157a`)
  //     .then(res => res.json())
  //     .then((result) => {
  //       setItems([result.Title, result.Actors, result.Plot, result.Poster]);
  //     })
  // };

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