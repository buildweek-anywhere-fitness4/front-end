import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
//import axios from "axios";
import FitnessClass from "./FitnessClass";

function InstructorDashboard(props) {
  //const [clients, setClients] = useState([])
  const [classes, setClasses] = useState([]);
  const [classID, setClassID] = useState(0);

  const [newClass, setNewClass] = useState({
    id: classID,
    name: "",
    type: "",
    start_time: "",
    duration: "",
    intensity: "",
    location: "",
    register_attendees: 0,
    max_size: 0,
    instructor_id: window.localStorage.getItem("token"),
  });

  const getClients = () => {
    axiosWithAuth
      .get("/api/client")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const createClass = (e) => {
    e.preventDefault();
    setClassID(classID + 1);
    setClasses([...classes, newClass]);
    console.log(classes);
    axiosWithAuth()
      .post("https://anywhere-fitness4.herokuapp.com/api/class/:id", newClass)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const inputHandler = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="getClients">
        <button onClick={getClients}> Get Registered Clients </button>
      </div>
      <div className="createClass">
        <form onSubmit={createClass}>
          <label htmlFor="name">Class Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newClass.name}
            onChange={inputHandler}
          />
          <label htmlFor="type">Type of Workout:</label>
          <input
            type="text"
            name="type"
            id="type"
            value={newClass.type}
            onChange={inputHandler}
          />
          <label htmlFor="starttime">Start Time:</label>
          <input
            type="time"
            name="start_time"
            id="start_time"
            value={newClass.start_time}
            onChange={inputHandler}
          />
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            name="duration"
            id="duration"
            value={newClass.duration}
            onChange={inputHandler}
          />
          <label htmlFor="intensity">Intensity Level:</label>
          <input
            type="text"
            name="intensity"
            id="intensity"
            value={newClass.intensity}
            onChange={inputHandler}
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={newClass.location}
            onChange={inputHandler}
          />
          <label htmlFor="register_attendees"># of Registrants:</label>
          <input
            type="text"
            name="register_attendees"
            id="register_attendees"
            value={newClass.register_attendees}
            onChange={inputHandler}
          />
          <label htmlFor="max_size">Max Class Size:</label>
          <input
            type="text"
            name="max_size"
            id="max_size"
            value={newClass.max_size}
            onChange={inputHandler}
          />
          <button type="submit">Create a Class</button>
        </form>
      </div>
      <FitnessClass classes={classes} />
    </div>
  );
}

export default InstructorDashboard;
