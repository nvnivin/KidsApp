import React from "react";

function Test1(props) {
  return (
    <div>
      <ul>
        <li>Name : {props.fullname}</li>
        <li>Age : {props.age}</li>
        <li>State : {props.state}</li>
        <li>City : {props.city}</li>
      </ul>
    </div>
  );
}

export default Test1;
