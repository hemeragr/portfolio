import { Link } from "react-router-dom";
import "../buttons/Buttons.scss";

const NavButton = ({ to, children }) => {
  return (
    <Link to={to} className="button-whit-logo">
      {children}
    </Link>
  );
};

export default NavButton;
