import React from "react";
import AddContentCard from "../components/AddContentCard";
import Navbar from "../inc/Navbar";
import Nav from "./Nav";
import Meals from "../images/meal_plan.png";
import vids from "../images/vids.png";
import Workout from "../images/workout.png";
import { Link } from "react-router-dom";

const AddContents = () => {
  return (
    <div className="a-con container">
      <Navbar />

      <Link to="/exerciseTherapy">
        <AddContentCard
          classname={"ad-card-vids"}
          uri={Meals}
          name={"Exercise Therapy"}
        />
      </Link>

      <Link to="/education">
        <AddContentCard
          classname={"ad-card-meal"}
          uri={vids}
          name={"Education"}
        />
      </Link>

      <Link to="/mindfulness">
        <AddContentCard
          classname={"ad-card-workout"}
          uri={Workout}
          name={"Mindfulness"}
        />
      </Link>

      <div className="bottom-nav-wrapper">
        <Nav />
      </div>
    </div>
  );
};

export default AddContents;
