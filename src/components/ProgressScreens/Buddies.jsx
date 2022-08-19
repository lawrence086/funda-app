import React from "react";
import { Button, Card } from "react-bootstrap";
import Notes from "../images/notes.png";

const Buddies = () => {
  return (
    <div>
      <div className="container mt-5">
        <Card
          style={{
            width: "20rem",
            height: "14rem",
            backgroundColor: "#e6e8fa",
            border: "none",
          }}
        >
          <Card.Body className="p-c-body">
            <img src={Notes} alt="notes" className="w-75 h-75 p-c-notes" />
          </Card.Body>
        </Card>

        <div className="container align-items-center justify-content-center flex-column d-flex mt-5">
          <span className="display-3 fs-3 text-dark text-center fw-bold">
            Invite Your Friends
          </span>
          <p className="p-c-subs text-muted display-6 fs-6 text-center mt-2">
            Know someone who might benefit from the program?send an invite so
            that they start first month free!
          </p>

          <Button varient="primary" className="mt-3 p-btn">
            Send Invite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Buddies;
