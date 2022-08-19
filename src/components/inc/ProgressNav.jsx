import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProgressNav = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="container mt-4">
      <Nav activeKey={""} className="p-item-links">
        <Nav.Item as="li">
          <Link to="/progress">
            <Nav.Link
              className="active text-primary"
              onClick={setSelected(selected)}
            >
              Buddies
            </Nav.Link>

            {selected ? (
              <hr className="active-line" />
            ) : (
              <hr className="in-active-line" />
            )}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/progress/stats">
            <Nav.Link
              className="act text-secondary"
              onClick={setSelected(selected)}
            >
              Stats
            </Nav.Link>
            {!selected ? (
              <hr className="active-line" />
            ) : (
              <hr className="in-active-line" />
            )}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/progress/goal">
            <Nav.Link
              className="act text-secondary"
              onClick={setSelected(selected)}
            >
              Goal
            </Nav.Link>
            {!selected ? (
              <hr className="in-active-line" />
            ) : (
              <hr className="active-line" />
            )}
          </Link>
        </Nav.Item>
      </Nav>
      <hr className="p-line" />
    </div>
  );
};

export default ProgressNav;
