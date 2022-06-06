import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
// import Form from "../../src/Form";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Link to="/home">Home Page&nbsp;&nbsp;&nbsp;</Link>
          <Link to="/about">About Page</Link>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default MainPage;
