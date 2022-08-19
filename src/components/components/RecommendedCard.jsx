import React from "react";
import { Card } from "react-bootstrap";

const RecommendedCard = ({ uri, username, specialist }) => {
  return (
    <div className="d-flex">
      <Card
        style={{
          height: "10rem",
          backgroundColor: "#D3F5F5",
          width: "10rem",
          marginBottom: "0.5rem",
          background:
            "linear-gradient(90deg, rgba(161, 140, 209, 0.15) 0%, rgba(251, 194, 235, 0.15) 100%)",
          border: "none",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Card.Img
          variant="top"
          src={uri}
          style={{
            maxHeight: "4rem",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%",
            maxWidth: "4rem",
            width: "100%",
            margin: "8px auto",
          }}
        />

        <Card.Body>
          <Card.Text className="m-0 p-0 display-6 fs-6 text-dark fw-bold text-center">
            {username}
          </Card.Text>

          <Card.Text
            className="m-0 p-0 text-center"
            style={{
              fontSize: "12px",
              color: "#c0c0c0",
              fontFamily: "Bahnschrift",
            }}
          >
            {specialist} specialist
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecommendedCard;
