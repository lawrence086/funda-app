// import { Divider } from "@mui/material";
import React from "react";
import FollowersCard from "../components/FollowersCard";
// import FollowersHeader from "../components/FollowersHeader";
import { FollowersData } from "./../Data/Followers";
import Nav from "./Nav";
import Navbar from "../inc/Navbar";

const Followers = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="f-con container m-0 p-0">
        {/* <FollowersHeader text={"My Followers"} no_followes={15} />
        <Divider /> */}

        <div className="con m-0 p-0">
          {FollowersData.map((item) => (
            <FollowersCard
              key={item.id}
              uri_img={item.uri_img}
              f_name={item.first_name}
              l_name={item.last_name}
              no_followers={item.no_followers}
            />
          ))}
        </div>

        <div className="bottom-nav-wrapper">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Followers;
