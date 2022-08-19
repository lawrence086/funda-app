import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ImgLogo from "../images/logo-app.png";
import ImgProfile from "../images/profile.png";
import "../styles/index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ width: "100%" }}>
      <div
        className="container-fluid bg-none m-0 p-0"
        style={{ borderRadius: 20 }}
      >
        <Link
          to="/"
          className="navbar-brand d-flex justify-content-around align-items-center"
          style={{ flexDirection: "row", display: "flex" }}
        >
          <Image src={ImgLogo} className="p-logo d-flex" />
          <span
            className="app-name"
            style={{ padding: 5, fontWeight: "700", fontSize: "1.2rem" }}
          >
            Trainer-App
            <h2
              style={{
                fontSize: "0.8rem",
                paddingTop: 3,
                color: "#a9a9a9",
                fontFamily: "Bahnschrift",
              }}
            >
              Good morning, Lawrence
            </h2>
          </span>
        </Link>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/profile" className="nav-link active ">
              <Image src={ImgProfile} className="p-avater d-flex" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
