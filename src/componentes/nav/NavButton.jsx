import { useState } from "react";
import { Link } from "react-router-dom";
import "../buttons/Buttons.scss";

const NavButton = ({ to, children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={to}
      className={`button-whit-logo ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered && children}
      {isHovered && <span className="button-text">{text}</span>}
    </Link>
  );
};

export default NavButton;
