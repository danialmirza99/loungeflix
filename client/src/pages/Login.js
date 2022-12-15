import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Form,
  FormControl,
  FormGroup,
  Col,
  Button
} from 'react-bootstrap';
import Makima from '../assets/images/Makima.jpg'

const styles = {
  logInStyles: {
    background: `url(${Makima})`,
    height: '900px',
    backgroundSize: 'cover',
  },
  formStyles:{
    display: 'flex',
    justifyContent: 'center',
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
      <Form  onSubmit={handleFormSubmit}>
        <FormGroup style = {styles.formStyles} controlId='formBasicEmail'>
          <Col >
            Email
          </Col>
          <Col sm={10}>
            <FormControl type='email' placeholder='Email' value={formState.email} name='email' onChange={handleChange} />
          </Col>
        </FormGroup>

        <FormGroup style = {styles.formStyles} controlId='formBasicPassword'>
          <Col >
            Password
          </Col>
          <Col sm={10}>
            <FormControl type='password' placeholder='Password' value={formState.password} name='password' onChange={handleChange} />
          </Col>
          <Button  style = {styles.formStyles} type='submit'>
          Login
        </Button>
        </FormGroup>

      </Form>
    </section>
  );
};

export default Login;
