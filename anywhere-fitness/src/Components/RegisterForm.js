import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';
import * as yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import WebsiteVideo from './WebsiteVideo.mp4'

const RegisterForm = () => {
    const user = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    }
    const [newUser, setNewUser] = useState(user)

    let formSchema=yup.object().shape({
        firstname: yup
            .string()
            .required(),
        lastname: yup
            .string()
            .required(),
        email: yup
            .string()
            .email()
            .required(),
        username: yup
            .string()
            .required(),
        password: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})+$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
        })

    const submitUser = e => {
        e.preventDefault();
        console.log("New User Created");
        axios
            .post("https://reqres.in/api/users", newUser)
             .then(res=>console.log(res))
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

    const radioButtons  = {
        value : ""
    }
    console.log(radioButtons)
    const[radioButton, setRadioButton] = useState(radioButtons)

    const radioButtonChange = e => {
        setRadioButton({
            ...radioButton,
            [e.target.name]:e.target.value
        });
            console.log(e.target.name);
            console.log(e.target.value);
    }

    const instructorCode = e => {
        

    }

    const [startDate, setStartDate] = useState(new Date());

    const backgroundVideo = WebsiteVideo

    return (
        <div style={{marginTop: '3%'}}>
              <video id="background-video" loop autoPlay style={{width: '100%', height: '95%', padding: '3.0%'}}>
                    <source src={backgroundVideo}type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            <Form 
                onSubmit={submitUser} 

                formschema={formSchema} 

                style={{position: 'absolute', top: '16%', left: '50%', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5))', padding: '2.61%', color: '#f1faee',textShadow: '2px 2px black', boxShadow: '1px 1px 5px black'}}>

                <FormGroup 
                    className="formtitle" 
                    style={{backgroundImage: 'linear-gradient(to right, rgba(28,9,32,.5), rgba(28,9,32,.5), rgba(28,9,32,.5))', padding: '1%', boxShadow: '1px 1px 5px black'}}>
                        <h1>GET YOUR HEALTHY LIFE</h1> 
                        <h2>REGISTER NOW!</h2>
                </FormGroup>

                <FormGroup 
                    className="firstname">
                        <Label for="firstname">FIRST NAME</Label>
                            <Input
                                type="firstname"
                                name="firstname"
                                id="firstname"
                                placeholder="First Name"
                                onChange={inputChange}
                                value={newUser.firstname}
                            />
                </FormGroup>

                <FormGroup 
                    className="lastname">
                        <Label for="lastname">LAST NAME</Label>
                            <Input
                                onChange={inputChange}
                                value={newUser.lastname}
                                type="lastname"
                                name="lastname"
                                id="lastname"
                                placeholder="Last Name"
                            />
                </FormGroup>

                <FormGroup 
                    className="email">
                        <Label for="email"> EMAIL</Label>
                            <Input
                                onChange={inputChange}
                                value={newUser.email}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter a valid email"
                            />
                </FormGroup>

                <FormGroup 
                    className="username">
                        <Label for="username">USERNAME</Label>
                            <Input
                                onChange={inputChange}
                                value={newUser.username}
                                type="username"
                                name="username"
                                id="username"
                                placeholder="A minimum of 8 characters"
                            />
                </FormGroup>

                <FormGroup 
                    className="password">
                        <Label htmlFor="password">PASSWORD</Label>
                            <Input
                                onChange={inputChange}
                                value={newUser.password}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="A minimum of 8 characters"
                            />
                </FormGroup>
                
                <FormGroup check style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly'}}>
                    <FormGroup>
                        <Label check>
                            <Input 
                                type="radio" 
                                name="client"/>{'Client'}
                        </Label>
                    </FormGroup> 
                    <FormGroup>
                        <Label check>
                            <Input 
                            type="radio" name="instructor"/>{'Instructor'}
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup className="dob">
                    <Label htmlFor="birthday">DOB</Label>
                    <DatePicker 
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                       
                    />
                </FormGroup>
                <FormGroup className="submitform">
                    <Button type='submit' style={{backgroundImage: 'linear-gradient(to right, rgba(28,9,32,.5), rgba(28,9,32,.5), rgba(28,9,32,.5))', color: '#f1faee',textShadow: '2px 2px black'}}>SIGN UP</Button>
                </FormGroup>
            </Form>
        </div>
    )
}


export default RegisterForm;
