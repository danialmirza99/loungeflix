import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyComponent from '../utils/api';

let title = sessionStorage.getItem("title");
let actors = sessionStorage.getItem("actors");
let plot = sessionStorage.getItem("plot");
let poster = sessionStorage.getItem("poster");


const styles = {
    cardStyles: {
        width: "350px",
        margin: "100px",
        borderStyle: "dotted",
        borderColor: "red",
        textAlign: "center",
        marginBottom: "10px"
    },
    imgStyle: {
        maxWidth: "50%",
        height: "auto",
        marginBottom: "10px",
        marginTop: "10px"
    }
  }

function MovieCard() {

    return (
      <Card style={styles.cardStyles}>
        <Card.Img variant="top" src={poster} style={styles.imgStyle} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Actors: {actors}            
          </Card.Text>
          <Card.Text>
            Plot: {plot}            
          </Card.Text>
          <MyComponent />
          <Button variant="primary">Reviews</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default MovieCard;