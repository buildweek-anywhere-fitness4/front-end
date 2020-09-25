import React, { useState } from "react";
import axios from "axios";
import * as Yup from 'yup'


const loginFormSchema = Yup.object().shape({
    email: Yup.string()
              .email("Email is not in the expected format")
              .required("Email is missing"),
    password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be 8 characters at minimum")
  });
  

const Login = () => {
    
    const initialState = {
        username: "",
        password: ""
    }
    
    const [formState, setFormState] = useState(initialState)
    
    const inputChangeHandler = (e) => {
        setFormState({...formState, [e.target.name] : e.target.value})
    }
    
    const loginSubmitHandler = (e) => {
       
        e.preventDefault();
        console.log(formState);
        axios.post("https://anywhere-fitness4.herokuapp.com/api/auth/client_login", formState)
        .then(res => console.log(res))
        .catch(err=> console.log(err))

    };
    
        return (
            <form onSubmit={loginSubmitHandler}
             validateSchema={loginFormSchema}>

                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    value={formState.username} 
                    onChange={inputChangeHandler} 
                    placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                     className="form-control" 
                     name="password"
                     value={formState.password}
                     onChange={inputChangeHandler}
                     placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <button>Forgot password?</button>
                </p>
            </form>
        );
    };
    
    export default Login;

   


