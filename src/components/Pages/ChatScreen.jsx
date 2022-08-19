import {
  ArrowBackSharp,
  Call,
  DoneAll,
  KeyboardVoice,
  Send,
  VideoCall,
} from "@mui/icons-material";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChatScreen = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="container-fluid d-flex">
        <Link to={"/message"} className="links-c">
          <ArrowBackSharp />
        </Link>
        <span className="text-muted-fs-4 text-center d-flex w-100 align-items-center justify-content-center">
          Lawrence Sekgoka
        </span>
        <VideoCall className="c-calls" />
        <Call className="c-calls" />
      </div>
      <hr />
      {/* <Divider className="c-divider" /> */}

      <div className="c-texts-con container">
        <div className="c-user-1">
          <DoneAll className="icon-c-read" />
          <span className="chat-user-1 ps-3">Hey Daniel...</span>
        </div>

        <div className="c-user-2">
          <DoneAll className="icon-c-read" />
          <span className="chat-user-1 ps-3">Hey Law, how have you been?</span>
        </div>

        <div className="c-user-1 n-m">
          <DoneAll className="icon-c-read" />
          <span className="chat-user-1 ps-3">
            I've been well thanks, and yourself?
          </span>
        </div>
      </div>

      <div className="container c-input-con d-flex">
        <div className="con-send w-100 d-flex">
          <Form.Control
            type="text"
            placeholder="Type here..."
            className="inputs-c d-inline-block"
          />
          <Send />
        </div>
        <KeyboardVoice className="d-inline-block c-record" />
      </div>
    </div>
  );
};

export default ChatScreen;
