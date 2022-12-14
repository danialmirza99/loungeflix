import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Form,
  FormControl,
  FormGroup,
  Col,
  Button
  //ControlLabel

} from 'react-bootstrap';
import Makima from '../assets/images/Makima.jpg'

const styles = {
  logInStyles: {
    background: `url(${Makima})`,
    height: "900px",
    backgroundSize: "cover",
  }
}

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // update state based on form input changes
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section style={styles.logInStyles} >
      <Form onSubmit={handleFormSubmit}>
        <FormGroup controlId="formBasicEmail">
          <Col >
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" value={formState.email} name='email' onChange={handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <Col >
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={formState.password} name='password' onChange={handleChange} />
          </Col>
        </FormGroup>
        <Button type='submit'>
          Login
        </Button>

      </Form>
    </section>
  );
};

export default Login;
