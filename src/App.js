import React from 'react';
import './App.css';
import routes from './routes'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {routes}
    </div>
  );
}

export default App;
