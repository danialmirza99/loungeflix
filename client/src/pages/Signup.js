import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Form,
  FormControl,
  FormGroup,
  Col,
  Button
  //ControlLabel
  
} from 'react-bootstrap';
import Matsuno from '../assets/images/Matsuno.jpg'
const styles = {
  signUpStyles: {
    background: `url(${Matsuno})`,
    height: "900px",
    filter: "brightness(0.8)",
    backgroundSize: "cover",
  }}
const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    };

    return (
      <section style={styles.signUpStyles}>

        <Form horizontal onSubmit={handleFormSubmit}>
            <FormGroup controlId="formHorizontalUsername">
    <Col >
      Username
    </Col>
    <Col sm={10}>
      <FormControl type="Username" placeholder="Username" value={formState.email} onChange={handleChange}/>
    </Col>
  </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
    <Col >
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" value={formState.email} onChange={handleChange}/>
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col >
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password"value={formState.password} onChange={handleChange} />
    </Col>
  </FormGroup>
  <Button type='submit'>
    Submit!
  </Button>
        </Form>
      </section>
    );
};
export default Signup;