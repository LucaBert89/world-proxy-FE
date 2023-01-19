import React from "react";
import axios from "axios";

export const NavSearch = () => {
  const handleClick = async () => {
    // const data = await axios.get(
    //   "http://localhost:8080/country/all",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       mode: "no-cors",
    //       credentials: "same-origin",
    //     },
    //   }

    const data = await fetch("http://localhost:8081/country/Italy", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log(data.json());
  };

  return (
    <>
      <input type="text"></input>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
