import React from "react";
import { Table } from "react-bootstrap";
const NestedTable = () => {
  const Info = [
    {
      Name: "Tanvir",
      Email: "tanvirkaurbedi@gmail.com",
      ContactNum: 9589148001,
      Age: "25",
      Address: [
        { HouseNum: "10", City: "Noida", Country: "India" },
        { HouseNum: "11", City: "Gurgaon", Country: "India" },
        { HouseNum: "12", City: "Delhi", Country: "India" },
      ],
    },
    {
      Name: "ravinder",
      Email: "ravinder@gmail.com",
      ContactNum: 700861221,
      Age: "29",
      Address: [
        { HouseNum: "10", City: "Noida", Country: "India" },
        { HouseNum: "11", City: "Gurgaon", Country: "India" },
        { HouseNum: "12", City: "Delhi", Country: "India" },
      ],
    },
    {
      Name: "Govind",
      Email: "govind@gmail.com",
      ContactNum: 70008451221,
      Age: "29",
      Address: [
        { HouseNum: "10", City: "Noida", Country: "India" },
        { HouseNum: "11", City: "Gurgaon", Country: "India" },
        { HouseNum: "12", City: "Delhi", Country: "India" },
      ],
    },
  ];

  return (
    <>
      <div>
        <h1>List With Nested Array</h1>
        <Table border="3" striped hover underlined>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>ContactNum</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
            {Info.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{data.Name}</td>
                  <td>{data.ContactNum}</td>
                  <td>{data.Age}</td>s
                  <td>
                    <Table border="3" striped hover underlined>
                      <th>HouseNum</th>
                      <th>City</th>
                      <th>Country</th>
                      {data.Address.map((address) => {
                        return (
                          <tr>
                            <td>{address.HouseNum}</td>
                            <td>{address.City}</td>
                            <td>{address.Country}</td>
                          </tr>
                        );
                      })}
                    </Table>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default NestedTable;
