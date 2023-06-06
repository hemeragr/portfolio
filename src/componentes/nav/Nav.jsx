import "./_Nav.scss";
import "../buttons/Buttons.scss";
import NavButton from "./NavButton";
import Skills from "../icons/Skills";
import Contact from "../icons/Contact";
import Home from "../icons/Home";
import About from "../icons/About";
import Work from "../icons/MyCode";

const Nav = () => {
  return (
    <nav>
      <NavButton  to="/">
        <Home />
      </NavButton>
      <NavButton  to="/about">
        <About />
      </NavButton>
      <NavButton  to="/work">
        <Work />
      </NavButton>
      <NavButton  to="/contact">
        <Contact />
      </NavButton>
      <NavButton  to="/skills">
        <Skills        />
      </NavButton>
    </nav>
  );
};

export default Nav;
