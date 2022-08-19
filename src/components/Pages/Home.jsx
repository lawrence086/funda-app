import React from "react";
import Carousels from "../components/Carousel";
import Navbar from "../inc/Navbar";
import Nav from "./Nav";
import { RecommendedData } from "./../Data/Recommended";
import RecommendedCard from "../components/RecommendedCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-con">
        <Carousels />
        <div className="con-recommended mt-4 mb-5">
          <span
            className="fw-bold text-muted display-5 fs-5 text-secondary"
            style={{ fontFamily: "Bahnschrift" }}
          >
            Recommended For You
          </span>
          <div className="r-con mt-3" style={{ columns: 2 }}>
            {RecommendedData.map((item) => {
              return (
                <RecommendedCard
                  uri={item.uri}
                  username={item.username}
                  specialist={item.specialist}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Home;
