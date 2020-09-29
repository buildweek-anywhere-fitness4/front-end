import React, { useContext } from "react";
import { FitnessClassContext } from "./InstructorDashboard";

const Class = () => {
  console.log(FitnessClassContext);
  const classArray = useContext(FitnessClassContext);
 
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
          </div>
        );
      })}
    </div>
  );
};

export default Class;
