import React from 'react';
import './App.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <Login/>
      <NavBar/>
      <Dashboard/>
      <Form/>
      <Post/>
    </div>
  );
}

export default App;
