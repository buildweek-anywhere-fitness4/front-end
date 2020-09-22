import React from 'react';
import RegisterForm from './Components/RegisterForm'
import { Route, Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Link to ="/RegisterForm"> Register Now </Link>
      <Route path="/RegisterForm">
        <RegisterForm />
      </Route>
     
    </div>
  );
}

export default App;
