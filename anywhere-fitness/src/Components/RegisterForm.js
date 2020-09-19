import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
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

    const [startDate, setStartDate] = useState(new Date());

    const backgroundVideo = WebsiteVideo
    return (
        <Container>
             <Video id="background-video" loop autoPlay>
                    <source src={backgroundVideo}type="video/mp4" />
                    Your browser does not support the video tag.
                </Video>

            <Form onSubmit={submitUser}>
                <Titlediv className="formtitle">
                <h1>GET YOUR HEALTHY LIFE</h1> 
                <h2>REGISTER NOW</h2>
                </Titlediv>
                
              <Divstyles className="firstname">
                    <Labelstyles htmlFor="firstname">FIRST NAME</Labelstyles>
                        <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="First Name"
                            onChange={inputChange}
                            value={newUser.firstname}
                        />
                </Divstyles>
                <Divstyles className="lastname">
                    <Labelstyles htmlFor="lastname">LAST NAME</Labelstyles>
                        <Input
                            onChange={inputChange}
                            value={newUser.lastname}
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last Name"
                        />
                </Divstyles>
                <Divstyles className="email">
                    <Labelstyles htmlFor="email">EMAIL</Labelstyles>
                        <Input
                            onChange={inputChange}
                            value={newUser.email}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter a valid email"
                        />
                </Divstyles>
                <Divstyles className="username">
                    <Labelstyles htmlFor="username">USERNAME</Labelstyles>
                        <Input
                            onChange={inputChange}
                            value={newUser.username}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="A minimum of 8 characters"
                        />
                </Divstyles>
                <Divstyles className="password">
                    <Labelstyles htmlFor="password">PASSWORD</Labelstyles>
                        <Input
                            onChange={inputChange}
                            value={newUser.password}
                            type="text"
                            name="password"
                            id="password"
                            placeholder="A minimum of 8 characters"
                        />
                </Divstyles>
                
                <Divstyles className="accounttype">
                    <Labelstyles htmlFor="account"> CLIENT</Labelstyles>
                        <input
                            type="radio"
                            onChange={radioButtonChange}
                            value="Client"
                            checked={radioButton.value === "Client"}
                            name="client"
                            id="account"
                        />
                        

                    <Labelstyles htmlFor="account">INSTRUCTOR</Labelstyles>
                        <input
                            type="radio"
                            onChange={radioButtonChange}
                            value="Instructor"
                            checked={radioButton.value === false}
                            name="instructor"
                            id="account"
                        />
                </Divstyles>
                <Dob className="dob">
                    <Labelstyles htmlFor="birthday">DOB</Labelstyles>
                    <DatePicker 
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                       
                    />
                </Dob>
                <div className="submitform">
                    <Button type='submit'>Create Your Account</Button>
                </div>
            </Form>
            <Anywherefitness className="anywhere-fitness">
                <h1>ANYWHERE FITNESS LETS CLIENTS AND INSTRUCTORS TAKE CONTROL OVER THEIR FITNESS</h1>
            </Anywherefitness>
            <Accountbox className="account-box">
                <Clientbox className="client-box">
                    <Clientpackage className="clinet-package">
                        <h1>CLIENT ACCOUNT</h1>
                        <h2>GROUP CLASSES TO</h2>
                        <h3>FIT ANY PREFERENCE OR SCHEDULE</h3>
                    </Clientpackage>
                </Clientbox>

                <Instructorbox className="instructor-box">
                    <Instructorpackage className = "instructor-package">
                        <h1>INSTRUCTOR ACCOUNT</h1>
                        <h2>SCHEDULE CLASSES AND RETAIN CLIENTS</h2>
                        <h3>TEACH ANYWHERE WITH ANYWHERE FITNESS</h3>
                    </Instructorpackage>
                </Instructorbox>
            </Accountbox>
        </Container>
    )
}
const Anywherefitness = styled.div`
    color: #f1faee;
    text-shadow: 2px 2px black;
    background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5));
    padding: 1%;
`

const Accountbox = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    color: #f1faee;
    text-shadow: 2px 2px black;
    margin-left: 5%;
    margin-right: 5%;
`
const Clientbox = styled.div`
    border: 1px solid black;
    background-image: url("https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: 1500px 1000px;
    background-position: center;
    height: 800px;
    width: 100%;
`
const Clientpackage = styled.div`
    box-shadow: 1px 1px 5px black;
    background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5));
    padding: 1%;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10%;   
`

const Instructorbox = styled.div`
    border: 1px solid black;
    background-image: url("https://images.pexels.com/photos/3822689/pexels-photo-3822689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    height: 800px;
    width: 100%;
    margin-left: 1%;
    background-position: center;
`
const Instructorpackage = styled.div`
    box-shadow: 1px 1px 5px black;
    background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5));
    padding: 1%;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10%;
`
const Container = styled.div`
    height: 1000px;
    text-shadow: 2px 2px black;  
`
const Video = styled.video`
    width: 100%;
`
const Form = styled.form`
    box-shadow: 1px 1px 5px;
    background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5));
    padding: 1%;
    position: absolute;
    top: 40%;
    left: 75%;
    transform: translate(-50%, -50%);
    margin-top: 10%;
`

const Divstyles = styled.div`
    margin-bottom: 1%;
    color: #f1faee;
`
const Titlediv = styled.div`
    background-image: linear-gradient(to right, rgba(60,152,255,.5), rgba(60,152,255,.5), rgba(60,152,255,.5));
    color: #f1faee;
    font-family: 'Merriweather Sans', sans-serif;
    box-shadow: 1px 1px 5px black;
    margin-bottom: 3%;
    width: 400px;
    padding: 1%;
`
const Input = styled.input`

    font-family: 'Lato', sans-serif;
    width: 100%;
    padding: 3px 2px;
    margin: 8px 0;
    box-sizing: border-box;
`
const Dob = styled.div`
    color: #f1faee;
    margin-bottom: 1%;
    width: 100%;
    padding: 3px 2px;
    margin: 8px 0;
    box-sizing: border-box;
`

const Labelstyles = styled.label`
    margin-right: 1%;
`
const Button = styled.button`
    background-image: linear-gradient(to right, rgba(0,78,164,.7), rgba(0,78,164,.5), rgba(0,78,164,.5));
    color: #f1faee;
    font-family: 'Lato', sans-serif;
    width: 100%;
    padding: 13px 2px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 1.5rem;
    text-shadow: 2px 2px black;
`

export default RegisterForm
