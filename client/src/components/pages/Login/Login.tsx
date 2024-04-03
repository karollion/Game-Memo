import styles from './Login.module.scss';
import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/userRedux';

// import components
// import MenuButton from '../../common/MenuButton/MenuButton';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string | null>(null); // null, "success", "error", "emailError"
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      .then(res => {
        if(res.status === 201) {
          setStatus('success');
          return res.json();
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .then(user => {
        dispatch(logIn({ user }));
        setTimeout(() => { navigate('/') }, 500);
      })
      .catch(err => {
        setStatus('serverError');
      })
  };

  return (
    <div className={styles.root}>
        <h2 className={styles.title}>SignUp</h2>

        <Form onSubmit={handleSubmit} className='col-12 col-sm-3 mx-auto my-4 px-3 min-vh-100'> 
          {status === 'success' && (
            <Alert variant='success'>
              <Alert.Heading>Succes!</Alert.Heading>
              <p>You have been successfully logined in!</p>
            </Alert>
          )}

          {status === 'serverError' && (
            <Alert variant='danger'>
              <Alert.Heading>Something went wrong...</Alert.Heading>
              <p>Unexpected error... Try again!</p>
            </Alert>
          )}

          {status === 'clientError' && (
            <Alert variant='danger'>
              <Alert.Heading>Incorrect data</Alert.Heading>
              <p>Login or password are incorrect...</p>
            </Alert>
          )}

          {status === 'loading' && (
            <Spinner animation='border' role='status' className='block mx-auto'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}

          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
              type='email' 
              value={loginData.email} 
              placeholder='example@email.com'
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password' 
              required
              value={loginData.password} 
              placeholder='******'
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </Form.Group>

          <div className='my-4 d-flex justify-content-center'>
          <button  type='submit' >Login</button>
          </div>

        </Form>
    </div>
  );
};

export default Login;