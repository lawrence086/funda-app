import React from "react";
// import Avatar from "@mui/material/Avatar";
import Forms from "../components/Form";
import Nav from "./Nav";
import Navbar from "../inc/Navbar";
import ImgProfile from "../images/profile.png";

const UserProfile = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="contact-box-2">
        <div class="left-box"></div>
        <div class="right-box">
          <form action="" class="sign-up-form" method="POST">
            <div className="img-profile">
              <img
                src={ImgProfile}
                className="p-profile d-flex"
                alt="img-profile"
              />
            </div>

            <h3 class="l-sub-t">Please update your details below.</h3>

            <div className="container p-con d-flex">
              <Forms />
              <div className="bottom-nav-wrapper">
                <Nav />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
