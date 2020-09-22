import React from 'react';
import RegisterForm from './components/RegisterForm'
import { Route, Link } from "react-router-dom"
import './App.css';
//import ClientContext from "./contexts/ClientContext";
//import InstructorContext from "./contexts/InstructorContext";
//import LoginForm from "./components/LoginForm";
//const [clients, setClients] = useState();
function App() {
  return (
    
    <div className="App">
      <Link to ="/RegisterForm"> Register Now </Link>
      {/* <Route path="/" component={LoginForm} /> */}
      <Route exact path="/RegisterForm">
        <RegisterForm />
      </Route>
      {/* <PrivateRoute>
        <Client>
      </PrivateRoute> */}

    </div>
  );
}

export default App;
