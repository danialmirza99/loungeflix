import React, { useState, useEffect } from 'react';
import SearchMovies from '../components/Search';

import Auth from '../utils/auth';
import { saveMovieIds, getSavedMovieIds, } from '../utils/localStorage';

import {
  Jumbotron,
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
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput)
  //     return false;


  //   try {
  //     const response = await searchMovies(searchInput)
  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }
  //     const { items } = await response.json();

  //     const movieData = items.map((movie) => ({
  //       title: movie.Title,
  //       actors: movie.Actors,
  //       plot: movie.Plot,
  //       poster: movie.Poster,
  //     }));

  //     setSearchedMovies(movieData);
  //     setSearchInput('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <section style={styles.sectionStyles}>
      <Jumbotron fluid className='text-light bg-dark'>
        <SearchMovies />
      </Jumbotron>
    </section>
  );
};

export default Home;