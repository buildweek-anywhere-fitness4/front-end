import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';
import * as yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import WebsiteVideo from './WebsiteVideo.mp4'
import  './RegisterForm.css'

const RegisterForm = () => {

    //////Form Code
    const user = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    };
    const [newUser, setNewUser] = useState(user);

      const submitUser = e => {
        e.preventDefault();
        console.log("New User Created");
        axios
            .post("https://reqres.in/api/users", newUser)
             .catch(err => console.log(err, "New User Not Created"));
    };
    const inputChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        });
            console.log(e.target.name);
            console.log(e.target.value);
    };

    //////Radio Buttons Code
    const getInitialState = {
        value: ''
    };
    const [pickOne, setPickOne]= useState(getInitialState);

    const radioButtonChange = e => {
        setPickOne({
            ...pickOne, 
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
        console.log(e.target.value);
    };

    ////Show Hidden Box
    const radioButtonClick = e => {
        if(document.getElementById('ib').checked) {
            document.getElementById('code').style.visibility='visible';
        }
        else document.getElementById('code').style.visibility = 'hidden';
    }


    /////Instructor Box OnChange
    const getClickState = {
        code: ''
    }
    const [click, setClick]= useState(getClickState)
    const radioButtonOnChange = e => {
        setClick({
            ...click, 
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
        console.log(e.target.value);
    }

    /////Date Picker Code
    const [startDate, setStartDate] = useState(new Date());
    
    
    //////YUP Validation
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
        });

    /////Background Video 
    const backgroundVideo = WebsiteVideo

    return (
        <div className="formholder" style={{marginTop: '3%'}}>
            <div className="promovid">
                <video className="backgroundvideo" id="background-video" loop autoPlay>
                    <source src={backgroundVideo}type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Form 
                className="registerForm" 
                onSubmit={submitUser} 
                formschema={formSchema} 
            >

                <FormGroup 
                    className="formtitle">
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
                
                <FormGroup className= "radioBox" check>
                    <FormGroup className="clientBox">
                        <Label for="client" check>
                            <Input 
                                onChange={radioButtonChange}
                                onClick={radioButtonClick}
                                id="client"
                                value="Client"
                                type="radio" 
                                name="selection"
                            />{'Client'}
                        </Label>
                    </FormGroup>

                    <FormGroup className="instructorBox">
                        <Label for="ib">
                            <Input 
                                onChange={radioButtonChange}
                                onClick={radioButtonClick}
                                value="Instructor"
                                type="radio" 
                                name="selection"
                                id="ib"
                            />{'Instructor'}
                        </Label>
                        
                        <FormGroup className="instructorCode">
                            <Label for="code">
                                <Input
                                    type="type"
                                    onChange={radioButtonOnChange}
                                    onClick={radioButtonClick}
                                    value={click.code}
                                    name="code"
                                    id="code"
                                    placeholder="Enter Instructor Code"
                                />
                            </Label>
                        </FormGroup>
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
                <FormGroup className="submitForm">
                    <Button className="button" type='submit' >SIGN UP</Button>
                </FormGroup>
            </Form>
        </div>
    )
}


export default RegisterForm;
