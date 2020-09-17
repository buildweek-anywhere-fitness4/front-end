import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const RegisterForm = () => {
    const user = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    }

    const [newUser, setNewUser] = useState(user)
    const [startDate, setStartDate] = useState(new Date());

    const submitUser = e => {
        e.preventDefault();
        console.log("New User Created");
        axios
            .post("https://reqres.in/api/users", newUser)
            .then(() => console.log("New User Created Successfully"))
            .catch(err => console.log(err, "New User Not Created"));
    };

    const inputChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        });
            console.log(e.target.name);
            console.log(e.target.value);
    }


    return (
        <div>
            <form onSubmit={submitUser}>
                <div className="enterfirstname">
                    <label htmlFor="first-name">FIRST NAME</label>
                        <input
                            type="text"
                            name="userfirstname"
                            id="first-name"
                            placeholder="First Name"
                            onChange={inputChange}
                            value={newUser.firstname}
                        />
                </div>
                <div className="enterlastname">
                    <label htmlFor="last-name">LAST NAME</label>
                        <input
                            onChange={inputChange}
                            value={newUser.lastname}
                            type="text"
                            name="userlastname"
                            id="last-name"
                            placeholder="Last Name"
                        />
                </div>
                <div className="enteremail">
                    <label htmlFor="new-email"> EMAIL</label>
                        <input
                            onChange={inputChange}
                            value={newUser.email}
                            type="text"
                            name="useremail"
                            id="new-email"
                            placeholder="Enter a valid email"
                        />
                </div>
                <div className="createusername">
                <label htmlFor="new-username">USERNAME</label>
                        <input
                            onChange={inputChange}
                            value={newUser.username}
                            type="text"
                            name="Username"
                            id="new-username"
                            placeholder="A minimum of 8 characters"
                        />
                </div>
                <div className="createpassword">
                    <label htmlFor="enter-password">PASSWORD</label>
                        <input
                            onChange={inputChange}
                            value={newUser.password}
                            type="text"
                            name="user-password"
                            id="enter-password"
                            placeholder="A minimum of 8 characters"
                        />
                </div>
                
                <div className="accounttype">
                    <label htmlFor="account"> CLIENT</label>
                        <input
                            type="radio"
                            name="client"
                            id="account"
                        />

                    <label htmlFor="account">INSTRUCTOR</label>
                        <input
                            type="radio"
                            name="instructor"
                            id="account"
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
