import LigthDark from "../icons/LigthDark";
import React from "react";
import "./Buttons.scss";

const NightModeToggle = ({ isNightMode, onToggle }) => {
  return (
    <button className="btn-night" onClick={onToggle}>
      {isNightMode ? (
        <React.Fragment>
          <LigthDark />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LigthDark />
        </React.Fragment>
      )}
    </button>
  );
};

export default NightModeToggle;
