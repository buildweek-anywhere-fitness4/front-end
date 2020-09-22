import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';


//import "react-datepicker/dist/react-datepicker.css";

    const initialState = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    };

const RegisterForm = () => {
    
    const [formState, setFormState] = useState(initialState)

    const submitUser = e => {
        e.preventDefault();
        console.log("New User Created");
        
        axios
            .post("https://anywhere-fitness4.herokuapp.com/api/auth/client_register", formState)
             .then(res=> console.log(res))
             .catch(err => console.log(err, "New User Not Created"));
    };

    const inputChange = e => {
    
       setFormState({ ...formState, [e.target.name]: e.target.value });
            
    }

    const radioButtons  = {
        value : ""
    }
    console.log(radioButtons)
    const[radioButton, setRadioButton] = useState(radioButtons)

    const radioButtonChange = e => {
        setRadioButton(!e.target.value);
            console.log(e.target.name);
            console.log(e.target.value);
    }

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <form onSubmit={submitUser}>
                <div className="firstname">
                    <label htmlFor="firstname">FIRST NAME</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="First Name"
                            onChange={inputChange}
                            value={formState.firstname}
                        />
                </div>
                <div className="lastname">
                    <label htmlFor="lastname">LAST NAME</label>
                        <input
                            onChange={inputChange}
                            value={formState.lastname}
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last Name"
                        />
                </div>
                <div className="email">
                    <label htmlFor="email"> EMAIL</label>
                        <input
                            onChange={inputChange}
                            value={formState.email}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter a valid email"
                        />
                </div>
                <div className="username">
                <label htmlFor="username">USERNAME</label>
                        <input
                            onChange={inputChange}
                            value={formState.username}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="A minimum of 8 characters"
                        />
                </div>
                <div className="password">
                    <label htmlFor="password">PASSWORD</label>
                        <input
                            onChange={inputChange}
                            value={formState.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="A minimum of 8 characters"
                        />
                </div>
                
                <div className="accounttype">
                    <label htmlFor="client"> CLIENT</label>
                        <input
                            type="radio"
                            onChange={radioButtonChange}
                            value="client"
                            checked={radioButton}
                            name="account-type"
                            id="client"
                        />
                        

                    <label htmlFor="instructor">INSTRUCTOR</label>
                        <input
                            type="radio"
                            onChange={radioButtonChange}
                            value="instructor"
                            checked={radioButton}
                            name="account-type"
                            id="instructor"
                        />
                </div>
                <div className="dob">
                    <label htmlFor="birthday">DOB</label>
                    <DatePicker 
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                       
                    />
                </div> 
                <div className="submitform">
                    <button type='submit'>SIGN UP</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
