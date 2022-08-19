import React from "react";
// import { Button, Card } from "react-bootstrap";
import Navbar from "../inc/Navbar";
// import ProgressNav from "../inc/ProgressNav";
import Nav from "./Nav";
// import Notes from "../images/notes.png";
import { Outlet } from "react-router-dom";
import NewProgressiveNavBar from "../inc/NewProgressiveNavBar";

const Progress = () => {
  return (
    <div className="container mt-3">
      <Navbar />

      <div className="container">
        <NewProgressiveNavBar />
      </div>

      <Outlet />

      <div className="bottom-nav-wrapper">
        <Nav />
      </div>
    </div>
  );
};

export default Progress;
