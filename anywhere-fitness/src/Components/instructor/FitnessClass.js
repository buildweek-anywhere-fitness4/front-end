import React, { useContext } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { FitnessClassContext } from "./InstructorDashboard";

const Class = () => {
  console.log(FitnessClassContext);
  const classArray = useContext(FitnessClassContext);
  
  const deleteClass = (fitnessClass) => {
    let id = fitnessClass.id;
   
    axiosWithAuth()
      .delete(`/api/class/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch(err=> console.log(err))
  };
  return (
    <div>
      {classArray.map((item) => {
        return (
          <div className={Date.now()}>
            <h2>{item.name}</h2>
            <p>{item.type}</p>
            <p>{item.starttime}</p>
            <p>{item.duration}</p>
            <p>{item.intensity}</p>
            <p>{item.location}</p>
            <p>{item.register_attendees}</p>
            <p>{item.max_size}</p>
            <button onClick={deleteClass}>Delete Class</button>
          </div>
        );
      })}
    </div>
  );
};

export default Class;
