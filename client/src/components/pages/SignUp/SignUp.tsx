import styles from './SignUp.module.scss';
import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';

// import components
import MenuButton from '../../common/MenuButton/MenuButton';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<string | null>(null); // null, "success", "error", "emailError"
  const [signUpData, setSignUpData] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setStatus('loading');
    fetch(`${API_URL}/auth/register`, options)
      .then(res => {
        if(res.status === 201) {
          setStatus('success');
          setSignUpData({ name: '', email: '', password: '', passwordRepeat: '' });
          setTimeout(() => {
            navigate('/');
          }, 5000);
        } else if (res.status === 409) {
          setStatus('emailError');
        } else {
          setStatus('serverError');
        }
      })
      .catch(err => {
        setStatus('error');
      })
  };

  return (
    <div className={styles.root}>
        <h2 className={styles.title}>SignUp</h2>

        <Form onSubmit={handleSubmit} className='col-12 col-sm-3 mx-auto my-4 px-3 min-vh-100'> 
          {status === 'success' && (
            <Alert variant='success'>
              <Alert.Heading>Succes!</Alert.Heading>
              <p>You have been successfully registered! You can now log in.</p>
            </Alert>
          )}

          {status === 'emailError' && (
            <Alert variant="danger">
              <Alert.Heading>User with such email already exists</Alert.Heading>
            </Alert>
          )}

          {status === 'error' && (
            <Alert variant="danger">
              <Alert.Heading>Something went wrong...</Alert.Heading>
              <p>Make sure all the fields are filled correctly and try again!</p>
            </Alert>
          )}

          {status === 'loading' && (
            <Spinner animation='border' role='status' className='block mx-auto'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}

          <Form.Group className='mb-3' controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type='text' 
              value={signUpData.name} 
              placeholder='Player name'
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
              type='email' 
              value={signUpData.email} 
              placeholder='example@email.com'
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password' 
              required
              value={signUpData.password} 
              placeholder='******'
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='confirmPassword'>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control 
              type='password' 
              required
              value={signUpData.passwordRepeat} 
              placeholder='******'
              onChange={(e) =>
                setSignUpData({ ...signUpData, passwordRepeat: e.target.value })
              }
            />
          </Form.Group>

          <div className='my-4 d-flex justify-content-center'>
          <button  type='submit' >Sign up</button>
          </div>

        </Form>
    </div>
  );
};

export default SignUp;