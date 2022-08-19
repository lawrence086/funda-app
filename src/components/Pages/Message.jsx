import React from "react";
import { Link } from "react-router-dom";
import MessageCard from "../components/MessageCard";
// import MessageHeader from "../components/MessageHeader";
import { ChatsData } from "../Data/Data";
import Navbar from "../inc/Navbar";
import Nav from "./Nav";

const Message = () => {
  return (
    <>
      <Navbar />
      <div className="container m-con">
        {/* <MessageHeader hText={"Chats"} /> */}
        <hr />

        <div className="con-chats">
          {ChatsData.map((item) => (
            <Link to={"chatScreen"} className="links">
              <MessageCard
                name={item.name}
                time={item.time}
                uri_img={item.uri_img}
                last_text={item.last_message.substring(0, 40)}
                key={item.id}
              />
            </Link>
          ))}
        </div>

        <div className="bottom-nav-wrapper">
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Message;
