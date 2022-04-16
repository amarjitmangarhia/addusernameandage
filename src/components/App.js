import React, { useState } from "react";
import UserInputComponent from "./UserInputComponent";
import "./App.css";

// const DUMMY_DATA = [
//   {
//     name: "Max",
//     age: 20,
//     id: "a",
//   },
//   {
//     name: "Rose",
//     age: 25,
//     id: "b",
//   },
//   {
//     name: "Miller",
//     age: 18,
//     id: "c",
//   },
//   {
//     name: "David",
//     age: 30,
//     id: "d",
//   },
// ];

function App() {
  const [oldData, setNewData] = useState("");
  const onFetchDataHandler = (data) => {
    // console.log("in app.js");
    // console.log(data);
    setNewData((prevData) => {
      return [data, ...prevData];
    });
  };
  return (
    <div>
      <UserInputComponent data={oldData} fetchData={onFetchDataHandler} />
    </div>
  );
}

export default App;
