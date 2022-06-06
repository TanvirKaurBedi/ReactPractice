import React, { useState } from "react";
const ApiPostMethod = () => {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  // const [address, setAddress] = useState();

  const SaveUser = () => {
    let data = { name, username, email };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  };

  return (
    <>
      <div>
        <h1>Post Method In Api</h1>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <br />
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        {/* <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        /> */}
        <br />
        <button
          type="button"
          onClick={() => {
            SaveUser();
          }}
        >
          Save New User
        </button>
      </div>
    </>
  );
};
export default ApiPostMethod;
