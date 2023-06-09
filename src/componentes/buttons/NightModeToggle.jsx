import React from "react";

const NightModeToggle = ({ isNightMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isNightMode ? "Modo día" : "Modo noche"}
    </button>
  );
};

export default NightModeToggle;
