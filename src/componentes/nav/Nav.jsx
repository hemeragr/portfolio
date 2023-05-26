import { Link } from "react-router-dom";
import "./_Nav.scss";
import ButtonIconAbout from "../buttons/ButtonIconAbout";
import ButtonIconContact from "../buttons/ButtonIconContact";
import ButtonIconHome from "../buttons/ButtonIconHome";
import ButtonIconSkills from "../buttons/ButtonIconSkills";
import ButtonIconWork from "../buttons/ButtonIconWork";

const Nav = () => {
  return (
    <>
      <header className="app_header">
        <nav>
          <Link className="app__link" to="/">
            <ButtonIconHome />
          </Link>
          <Link className="app__link" to="/about">
            <ButtonIconAbout />
          </Link>
          <Link className="app__link" to="/work">
            <ButtonIconWork />
          </Link>
          <Link className="app__link" to="/contact">
            <ButtonIconContact />
          </Link>
          <Link className="app__link" to="/skills">
            <ButtonIconSkills />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Nav;
