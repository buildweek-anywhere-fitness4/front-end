import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import styled from 'styled-components'
import './App.css';
import InstructorDashboard from './Components/instructor/InstructorDashboard';

// function App() {
//   return (
    
//     <div className="App">
//       <Link to ="/RegisterForm"> Register Now </Link>
//       <Route path="/RegisterForm">
//         <RegisterForm />
//       </Route>

     
//     </div>
//   );
// }

// export default App;

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/LoginForm"}>Anywhere Fitness</Link>
          <div className="collapse navbar-collapse" id="#">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/LoginForm"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/RegisterForm"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/RegisterForm" component={RegisterForm} />
            <Route path="/instructor" component={InstructorDashboard} />         
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;