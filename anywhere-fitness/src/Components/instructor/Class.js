import React from "react";

const Class = (props) => {
  return (
    <div>
      {props.classes.forEach((item) => {
        <p>{item.classname}</p>;
        <p>{item.type}</p>;
        <p>{item.starttime}</p>;
        <p>{item.duration}</p>;
        <p>{item.intensity}</p>;
        <p>{item.location}</p>;
        <p>{item.registrants}</p>;
        <p>{item.maxregistrants}</p>;
      })}
    </div>
  );
};

export default Class;
