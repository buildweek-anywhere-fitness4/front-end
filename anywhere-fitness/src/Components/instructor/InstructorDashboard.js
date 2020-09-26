import React, { useState }from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";


function InstructorDashboard(props) {
  
  //const [clients, setClients] = useState([])
  const [classes, setClasses] = useState([]);
  const [classID, setClassID] = useState(0);
  
  const [newClass, setNewClass] = useState({
    id: "",
    classname: "",
    type: "",
    starttime: "",
    duration: "",
    intensity: "",
    location: "",
    registrants: 0,
    maxregistrants: 0
  })
  
  const getClients = () => {
  axiosWithAuth()
    .get("/api/client")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  };
  
  const createClass = (e) => {
    e.preventDefault();
    setClassID(classID + 1);
    setClasses([...classes, newClass]);
    console.log(classes)
    //axios.post("https://anywhere-fitness4.herokuapp.com/api/class/:id", newClass)
  };

  const inputHandler = (e) => {
  setNewClass({...newClass, [e.target.name] : e.target.value})
  };
  
  return (
    <div>
      <div className="getClients">
        <button onClick={getClients}> Get Registered Clients </button>
      </div>
      <div className="createClass">
        <form onSubmit={createClass}>
          <label htmlFor="classname">Class Name:</label>
          <input
          type="text"
          name="classname"
          id="classname"
          value={newClass.classname}
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
          type="text"
          name="starttime"
          id="starttime"
          value={newClass.starttime}
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
          <label htmlFor="registrants"># of Registrants:</label>
          <input
          type="text"
          name="registrants"
          id="registrants"
          value={newClass.registrants}
          onChange={inputHandler}
          />
          <label htmlFor="maxregistrants">Max # of Registrants</label>
          <input
          type="text"
          name="maxregistrants"
          id="maxregistrants"
          value={newClass.maxregistrants}
          onChange={inputHandler}
          />
          <button type="submit">Create Class</button>

        </form>
        </div>
    </div>
  );
}

export default InstructorDashboard;
