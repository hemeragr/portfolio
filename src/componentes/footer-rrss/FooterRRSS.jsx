import { Link } from "react-router-dom";
import Insta from "./rrss/Instagram";
import Twitter from "./rrss/Twitter";

import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <nav className="nav-footerRRSS">
        <span className="content-appRRSS">
          <Link className="app__link" to="https://twitter.com/eroina_h">
            <Twitter className="app-icon" />
          </Link>
        </span>

        <span className="content-appRRSS">
          <Link className="app__link" to="https://www.instagram.com/hemera_gr/">
            <Insta className="app-icon" />
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Footer;
