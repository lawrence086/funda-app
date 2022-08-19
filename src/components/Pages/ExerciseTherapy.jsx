import {
  ArrowBackSharp,
  ChairOutlined,
  ErrorOutlineOutlined,
  TableRestaurantOutlined,
  FitnessCenterOutlined,
  DryCleaningOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import ImgMed from "../images/mindful.png";

const ExerciseTherapy = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="container-fluid d-flex">
        <Link to={"/message"} className="links-c">
          <ArrowBackSharp />
        </Link>
        <span
          className="text-muted-fs-4 text-center d-flex w-100 align-items-center justify-content-center"
          style={{ fontSize: "1.1rem" }}
        >
          Exercise Therapy
        </span>
        <ErrorOutlineOutlined fontSize="medium" />
      </div>

      <div
        className="card duration-container mt-5 border-0"
        style={{ height: "100%" }}
      >
        <div className="container-fluid d-flex justify-content-between fw-bold">
          <div style={{ fontSize: "1.1rem" }}>
            Class duration
            <div
              className="mt-1"
              style={{ color: "#a9a9a9", fontWeight: "normal", fontSize: 14 }}
            >
              9 min
            </div>
          </div>
          <div>Level 6</div>
        </div>
        <div
          className="e-equipment mt-4 fw-bold"
          style={{ fontSize: "1.1rem", marginLeft: 12 }}
        >
          Equipment
        </div>
        <div className="card e-content mt-2 mb-3 border-0 ">
          <div
            className="container-fluid d-flex border-0"
            style={{ padding: 10, height: "6vh" }}
          >
            <div
              className="e-chair"
              style={{
                borderRadius: 20,
                paddingRight: 5,
                paddingLeft: 6,
                paddingTop: 2,
                backgroundColor: "#EBECF0",
              }}
            >
              <ChairOutlined style={{ color: "#a9a9a9" }} />
              <span
                className="mx-2"
                style={{ color: "#a9a9a9", fontWeight: "600" }}
              >
                Chair
              </span>
            </div>

            <div
              className="mx-2 e-table"
              style={{
                borderRadius: 20,
                paddingRight: 2,
                paddingLeft: 6,
                paddingTop: 2,
                backgroundColor: "#EBECF0",
              }}
            >
              <TableRestaurantOutlined style={{ color: "#a9a9a9" }} />
              <span
                className="mx-2"
                style={{ color: "#a9a9a9", fontWeight: "600" }}
              >
                Table
              </span>
            </div>

            <div
              className="e-yoga"
              style={{
                borderRadius: 20,
                paddingRight: 2,
                paddingLeft: 6,
                paddingTop: 2,
                backgroundColor: "#EBECF0",
              }}
            >
              <TableRestaurantOutlined style={{ color: "#a9a9a9" }} />
              <span
                className="mx-2"
                style={{ color: "#a9a9a9", fontWeight: "600" }}
              >
                Yoga
              </span>
            </div>
          </div>
          <div
            className="container-fluid d-flex "
            style={{ padding: 10, height: "6vh" }}
          >
            <div
              className="e-chair"
              style={{
                borderRadius: 20,
                paddingRight: 5,
                paddingLeft: 6,
                paddingTop: 2,
                backgroundColor: "#EBECF0",
              }}
            >
              <FitnessCenterOutlined style={{ color: "#a9a9a9" }} />
              <span
                className="mx-2"
                style={{ color: "#a9a9a9", fontWeight: "600" }}
              >
                Dumbbells
              </span>
            </div>

            <div
              className="mx-2 e-table"
              style={{
                borderRadius: 20,
                paddingRight: 2,
                paddingLeft: 6,
                paddingTop: 2,
                backgroundColor: "#EBECF0",
              }}
            >
              <DryCleaningOutlined style={{ color: "#a9a9a9" }} />
              <span
                className="mx-2"
                style={{ color: "#a9a9a9", fontWeight: "600" }}
              >
                Towel
              </span>
            </div>

            <div
              className="e-yoga"
              style={{
                borderRadius: 20,
                paddingRight: 2,
                paddingLeft: 6,
                paddingTop: 2,
                backgroundColor: "#EBECF0",
              }}
            >
              <TableRestaurantOutlined style={{ color: "#a9a9a9" }} />
              <span
                className="mx-2"
                style={{ color: "#a9a9a9", fontWeight: "600" }}
              >
                Towel
              </span>
            </div>
          </div>
        </div>
      </div>
      <card className="e-exercise-overview mt-5">
        <div className="container-fluid fw-bold">
          <div style={{ fontSize: "1.1rem" }}>Exercise overview</div>
        </div>

        <div className="container-fluid d-flex justify-content-sm-start mx-1 mt-3">
          <card
            className="e-avatar mt-2 text-center"
            style={{
              height: "100%",
              width: "15vh",
              borderRadius: 15,
              backgroundColor: "#f4f0ec",
            }}
          >
            <img
              src={ImgMed}
              alt="c-img"
              style={{ width: 150, marginLeft: -12 }}
            />
          </card>
          <card
            className="e-avatar mt-2 "
            style={{ height: "100%", width: "25vh" }}
          >
            <div className="fw-bold mt-4 mx-2">Mountain pose</div>
            <div className="mx-2" style={{ fontSize: 13, color: "#c0c0c0" }}>
              Sanskrit: Tadasana
            </div>
          </card>
        </div>

        <div className="container-fluid d-flex justify-content-sm-start mx-1 mt-3">
          <card
            className="e-avatar mt-2 text-center"
            style={{
              height: "100%",
              width: "15vh",
              borderRadius: 15,
              backgroundColor: "#f4f0ec",
            }}
          >
            <img
              src={ImgMed}
              alt="c-img"
              style={{ width: 150, marginLeft: -12 }}
            />
          </card>
          <card
            className="e-avatar mt-2 "
            style={{ height: "100%", width: "25vh" }}
          >
            <div className="fw-bold mt-4 mx-2">Down dog on a chair</div>
            <div className="mx-2" style={{ fontSize: 13, color: "#c0c0c0" }}>
              Sanskrit: Uttana shishosana
            </div>
          </card>
        </div>

        <div className="container-fluid d-flex justify-content-sm-start mx-1 mt-3">
          <card
            className="e-avatar mt-2 text-center"
            style={{
              height: "100%",
              width: "15vh",
              borderRadius: 15,
              backgroundColor: "#f4f0ec",
            }}
          >
            <img
              src={ImgMed}
              alt="c-img"
              style={{ width: 150, marginLeft: -12 }}
            />
          </card>
          <card
            className="e-avatar mt-2 "
            style={{ height: "100%", width: "25vh" }}
          >
            <div className="fw-bold mt-4 mx-2">Downward-facing dog</div>
            <div className="mx-2" style={{ fontSize: 13, color: "#c0c0c0" }}>
              Sanskrit: shishosana
            </div>
          </card>
        </div>
      </card>
    </div>
  );
};

export default ExerciseTherapy;
