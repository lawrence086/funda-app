import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewProgressiveNavBar = () => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="container d-flex p-item-links">
      <Link to="/progress" className="nav-item-links" onClick={setSelected}>
        <span className="text-muted">Buddies</span>
        {selected ? (
          <hr className="active-line" />
        ) : (
          <hr className="in-active-line" />
        )}
      </Link>
      <Link
        to="/progress/stats"
        className="nav-item-links"
        onClick={setSelected}
      >
        <span className="text-muted">Stats</span>
        {!selected ? (
          <hr className="active-line" />
        ) : (
          <hr className="in-active-line" />
        )}
      </Link>
      <Link
        to="/progress/goal"
        className="nav-item-links"
        onClick={setSelected}
      >
        <span className="text-muted">Goal</span>
        {!selected ? (
          <hr className="active-line" />
        ) : (
          <hr className="in-active-line" />
        )}
      </Link>
    </div>
  );
};

export default NewProgressiveNavBar;
