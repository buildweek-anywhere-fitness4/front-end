import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
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

