import React, { useState } from "react";
import "./UserInputComponent.css";
import RenderComponent from "./RenderComponent";

const UserInputComponent = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const onNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();

    const returnData = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    };

    props.fetchData(returnData);
    setUserName("");
    setUserAge("");
  };

  return (
    <div className="container">
      <form className="form">
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={onNameChangeHandler}
        ></input>
        <label>Age (Years)</label>
        <input
          type="number"
          value={userAge}
          onChange={onAgeChangeHandler}
        ></input>
        <div className="button">
          <button onClick={onClickHandler}>Add User</button>
        </div>
      </form>
      <div className="items">
        {/* <RenderComponent name={props.data[0].name} age={props.data[0].age} />
        <RenderComponent name={props.data[1].name} age={props.data[1].age} />
        <RenderComponent name={props.data[2].name} age={props.data[2].age} />
        <RenderComponent name={props.data[3].name} age={props.data[3].age} /> */}
        <div className="no-data">
          {props.data.length === 0 && "No data Available"}
        </div>
        {props.data.length > 0 &&
          props.data.map((item) => (
            <RenderComponent name={item.name} age={item.age} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default UserInputComponent;
