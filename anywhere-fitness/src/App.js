import React from 'react';
import RegisterForm from './Components/RegisterForm'
import { Route, Link } from "react-router-dom"
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h3 style={{float: 'left', marginLeft: '10%'}}>ANYWHERE FITNESS</h3>
      <nav style={{float: 'right', marginRight: '10%', marginTop: "1.5%"}} className="navbar">

      <Link 
        to ="/LoginForm" 
        style={{textDecoration: 'none'}}>
          LOG IN
      </Link>

      <Link 
        to ="/RegisterForm" 
        style={{textDecoration: 'none'}}>
          SIGN UP 
      </Link>

      </nav>
      <Route path="/RegisterForm">
        <RegisterForm />
      </Route>
     
    </div>
  );
}


export default App;
