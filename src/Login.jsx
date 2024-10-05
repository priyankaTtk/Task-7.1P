import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure this file is imported for centering
import './Login.css';
import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase';

const Login = (props) => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  const [contact, setContact] = useState({
    email: '',
    password: ''
  });

  const { email, password } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value
    }));
  };

  return (
    <div className="main-content"> {/* Centers the login box */}
      <div className="header-divv" style={{ width: '400px' }}>
        <label>Email</label>
        <Input
          name='email'
          type='text'
          placeholder='email'
          onChange={handleChange}
          value={contact.email}
        />

        <br />
        <label>Password</label>
        <Input
          name='password'
          type='password'
          placeholder='password'
          onChange={handleChange}
          value={contact.password}
        />

        <br />

        <button>
          Log in
        </button>
        <br />
        <button onClick={logGoogleUser}>
          Login with Google
        </button>
        <br />
        <br />
        <div className='signup-link'>
        <Link to='/signup'>
          Sign up instead
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
