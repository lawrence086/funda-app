import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { Card, Image } from "react-bootstrap";

const AddContentCard = ({ classname, uri, name }) => {
  return (
    <>
      <Card className={classname}>
        <Card.Body className="ad-card-body">
          <div className="c-texts-wrapper">
            <span
              className="fw-bold show-more display-6 fs-6 text-muted d-block type"
              style={{ fontFamily: "Bahnschrift", fontSize: "2rem" }}
            >
              {name}
            </span>
            <span
              className="fw-bold show-more display-4 fs-5 text-muted show-btn"
              style={{ fontFamily: "Bahnschrift" }}
            >
              Show More <ArrowForward className="text-dark" />
            </span>
          </div>
          <Image src={uri} alt="video-tutorials" className="ad-card-img" />
        </Card.Body>
      </Card>
    </>
  );
};

export default AddContentCard;
