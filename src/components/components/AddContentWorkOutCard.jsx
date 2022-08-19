import React from "react";
import { Card, Image } from "react-bootstrap";
import Img from "../../images/workout.png";

const AddContentWorkOutCard = () => {
  return (
    <>
      <Card className="ad-card-workout">
        <Card.Body className="ad-card-body">
          <span className="show-more display-6 fs-6 text-muted d-block type">
            Workout Plans
          </span>
          <span className="show-more display-4 fs-5 text-muted text-decoration-underline show-btn">
            Show More
          </span>
          <Image src={Img} alt="workout-plans" className="ad-card-img" />
        </Card.Body>
      </Card>
    </>
  );
};

export default AddContentWorkOutCard;
