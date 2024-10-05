import React from 'react';
import './App.css';
import Movies from './routes/Movies.jsx';
import Post from './routes/Post';
import {Routes, Route} from 'react-router-dom'
import NavFooter from './NavFooter'
import Login from './Login'
import Signup from './Signup';

function App() {
  
  return (
  <Routes>
  <Route path='/' element={<NavFooter />}>
  <Route index element={<Movies />}/>
  <Route path='post' element={<Post />}/>
  <Route path='login' element= {<Login />}/>
  <Route path='signup' element= {<Signup />}/>
  </Route>
  </Routes>
  
  
  );
}

export default App;


