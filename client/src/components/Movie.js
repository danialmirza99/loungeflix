// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Card from 'react-bootstrap/Card';
// import MyComponent from '../utils/api';

// let title = sessionStorage.getItem("title");
// let actors = sessionStorage.getItem("actors");
// let plot = sessionStorage.getItem("plot");
// let poster = sessionStorage.getItem("poster");


// const styles = {
//     cardStyles: {
//         width: "350px",
//         margin: "100px",
//         borderStyle: "solid",
//         borderColor: "red",
//         textAlign: "center",
//         marginBottom: "10px",
//     },
//     imgStyle: {
//         maxWidth: "50%",
//         height: "auto",
//         marginBottom: "10px",
//         marginTop: "10px"
//     },
//     modalStyles: {
//       width: "350px",
//       margin: "100px",
//       borderStyle: "solid",
//       borderColor: "blue",
//       textAlign: "center",
//       marginBottom: "10px"
//   },
//   }

// function MovieCard() {

//     return (
//       <section>
//         <MyComponent />
//         <Card style={styles.cardStyles}>
//         <Card.Img variant="top" src={poster} style={styles.imgStyle} />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             Actors: {actors}            
//           </Card.Text>
//           <Card.Text>
//             Plot: {plot}            
//           </Card.Text>
//           <Button href="google.com" variant="primary">Reviews</Button>
//         </Card.Body>
//       </Card>
//       <div
//       className="modal show" style={styles.modalStyles}>
//         {/* Need to generate the modal in the middle of the page when the Review Button is pressed */}
//       <Modal.Dialog>
//           <Modal.Title>{title} Review</Modal.Title>
//           <p>by Author</p>

//         <Modal.Body>
//           <p>This movie was not very great. I did not like Leo's performance.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//       </section>
      
//     );
//   }
  
//   export default MovieCard;

import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { removeMovieId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
// import { REMOVE_MOVIE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const SavedMovies = () => {
  const { loading, data } = useQuery(GET_ME);

  // const [removeMovie, { error }] = useMutation(REMOVE_MOVIE);
  
  const userData = data?.me || {};
  const handleDeleteMovie = async (movieId) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return false;
  }

  // try {
  //   const res = await removeMovie({
  //     variables: { movieId },
  //   });
  //   removeMovieId(movieId);
  // } catch (err) {
  //   console.error(err);
  // }
};

if (loading) {
  return <h2>LOADING...</h2>;
}
  

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved Movie!</h1>
        </Container>
      </Jumbotron>
      <Container>
        {/* <h2>
          {userData.SavedMovies.length
            ? `Viewing ${userData.savedMovies.length} saved ${userData.SavedMovies.length === 1 ? 'movie' : 'movies'}:`
            : 'You have no saved movies!'}
        </h2> */}
        <CardColumns>
          {userData.savedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                {movie.poster ? <Card.Img src={movie.poster} alt={`The cover for ${movie.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p className='small'>Actors: {movie.actors}</p>
                  <Card.Text>{movie.plot}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteMovie(movie.movieId)}>
                    Delete this movie!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedMovies;