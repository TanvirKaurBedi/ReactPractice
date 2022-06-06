import React from "react";
import { Table } from "react-bootstrap";
const MapMethodEgTable = () => {
  const Info = [
    {
      Name: "Tanvir",
      Email: "tanvirkaurbedi@gmail.com",
      ContactNum: 9589148001,
      Age: "25",
    },
    {
      Name: "ravinder",
      Email: "ravinder@gmail.com",
      ContactNum: 700861221,
      Age: "29",
    },
    {
      Name: "Govind",
      Email: "govind@gmail.com",
      ContactNum: 70008451221,
      Age: "29",
    },
  ];
  return (
    <>
      <h1>Table</h1>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>ContactNum</th>
            <th>Age</th>
          </tr>
          {Info.map((data, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.ContactNum}</td>
                <td>{data.Age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default MapMethodEgTable;
