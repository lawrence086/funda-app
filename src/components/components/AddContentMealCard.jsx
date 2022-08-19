import React from "react";
import { Card, Image } from "react-bootstrap";
import Img from "../../images/meal_plan.png";

const AddContentMealCard = () => {
  return (
    <>
      <Card className="ad-card-meal">
        <Card.Body className="ad-card-body">
            <span className="show-more display-6 fs-6 text-muted d-block type">Meal Plans</span>
            <span className="show-more display-4 fs-5 text-muted text-decoration-underline show-btn">Show More</span>
          <Image src={Img} alt="meal-plans" className="ad-card-img-m" />
        </Card.Body>
      </Card>
    </>
  );
};

export default AddContentMealCard;
