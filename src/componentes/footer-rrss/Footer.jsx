import { Link } from "react-router-dom";
import GitHub from "./rrss/Github";
import CodePen from "./rrss/CodePen";
import Instagram from "./rrss/Instagram";
import Linkedin from "./rrss/Linkedin";
import Mail from "./rrss/Mail";
import Twitter from "./rrss/Twitter";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <nav className="nav">
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
    </div>
  );
};

export default Footer;
