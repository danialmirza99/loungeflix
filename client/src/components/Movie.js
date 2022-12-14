import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
    },
    modalStyles: {
      width: "350px",
      margin: "100px",
      borderStyle: "solid",
      borderColor: "blue",
      textAlign: "center",
      marginBottom: "10px"
  },
  }

function MovieCard() {

    return (
      <section>
        <MyComponent />
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
          <Button href="google.com" variant="primary">Reviews</Button>
        </Card.Body>
      </Card>
      <div
      className="modal show" style={styles.modalStyles}>
        {/* Need to generate the modal in the middle of the page when the Review Button is pressed */}
      <Modal.Dialog>
          <Modal.Title>{title} Review</Modal.Title>
          <p>by Author</p>

        <Modal.Body>
          <p>This movie was not very great. I did not like Leo's performance.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
      </section>
      
    );
  }
  
  export default MovieCard;