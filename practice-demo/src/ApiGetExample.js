import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ApiGetExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((result) => {
        // console.log("result", result);
        setData(result);
      });
    });
  }, []);

  return (
    <>
      <div>
        <h1>Api Get Method </h1>
        <Table border="2" striped hover>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>

                <td>{item.address.street}</td>
                <td>{item.address.suite}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.address.street}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default ApiGetExample;
