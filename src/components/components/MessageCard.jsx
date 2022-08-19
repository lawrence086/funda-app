import React from "react";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";

const MessageCard = ({ name, time, uri_img, last_text }) => {
  return (
    <>
      <div className="card-con">
        <div className="c-profile">
          <Avatar alt="Remy Sharp" src={uri_img} />
        </div>
        <div className="c-content">
          <h4 className="display-4 c-name">{name}</h4>
          <span className="display-6 c-last_text">{last_text}</span>
        </div>
        <div className="c-duration">
          <span className="display-6 c-time">{time}</span>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default MessageCard;
