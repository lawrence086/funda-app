import React from "react";
import { Button, Card, Carousel, CarouselItem } from "react-bootstrap";
import { TrainersData } from "../Data/Trainers";

import Circle from "../images/circle.png";

const Carousels = () => {
  return (
    <div>
      <Carousel
        controls={false}
        indicators={true}
        interval={100000}
        style={{ color: "#000" }}
      >
        {TrainersData.map((item) => {
          return (
            <CarouselItem key={item.id}>
              <Card
                style={{
                  height: "14rem",
                  background:
                    "linear-gradient(90deg, rgba(161, 140, 209, 0.15) 0%, rgba(251, 194, 235, 0.15) 100%)",
                  border: "none",
                  borderRadius: 20,
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.uri}
                  style={{
                    maxHeight: "8rem",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "100%",
                    maxWidth: "8rem",
                    width: "100%",
                    margin: "8px auto",
                    position: "absolute",
                    right: "1rem",
                  }}
                />

                <Card.Body
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "0",
                  }}
                >
                  <Card.Text
                    className="m-0 p-0 display-6 fs-6"
                    style={{
                      // position: "absolute",
                      // top: "1rem",
                      color: "GrayText",
                      margin: "2rem 0",
                    }}
                  >
                    Our Favorite
                  </Card.Text>

                  <Card.Text
                    className="m-0 p-0 display-4 fs-1 text-dark fw-bold w-75 mt-4"
                    style={{
                      marginTop: "1rem",
                      fontFamily: "Bahnschrift",
                    }}
                  >
                    {item.username}
                  </Card.Text>
                </Card.Body>

                <Button
                  variant="success"
                  style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "1rem",
                    borderRadius: "5rem",
                    background: "#77dd77",
                    border: "none",
                    height: "35px",
                    fontSize: "0.8rem",
                  }}
                  className="btn-carousel"
                >
                  <img src={Circle} alt="dot" className="dot-img" />
                  Available now
                </Button>
              </Card>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carousels;
