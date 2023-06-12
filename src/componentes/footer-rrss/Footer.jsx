import { Link } from "react-router-dom";
import GitHub from "./rrss/Github";
import CodePen from "./rrss/CodePen";
import Linkedin from "./rrss/Linkedin";

import "./Footer.scss";

const Footer = () => {
  return (
    <nav className="nav-footer">
      <span className="content-app">
        <Link className="app__link" to="https://github.com/hemeragr">
          <GitHub className="app-icon" />
        </Link>
      </span>
      <span className="content-app">
        <Link className="app__link" to="https://codepen.io/hemeragr">
          <CodePen className="app-icon" />
        </Link>
      </span>
      <span className="content-app">
        <Link
          className="app__link"
          to="https://www.linkedin.com/in/hemera-guerrero-141119274/"
        >
          <Linkedin className="app-icon" />
        </Link>
      </span>
    </nav>
  );
};

export default Footer;
