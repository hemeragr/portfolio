import "./_Nav.scss";
import "../buttons/Buttons.scss";
import NavButton from "./NavButton";
import Skills from "../icons/Skills";
import Contact from "../icons/Contact";
import About from "../icons/About";
import Work from "../icons/MyCode";

const NavHome = () => {
  return (
    <nav className="nav">
      <NavButton to="/about">
        <About />
      </NavButton>
      <NavButton to="/work">
        <Work />
      </NavButton>
      <NavButton to="/skills">
        <Skills />
      </NavButton>
      <NavButton to="/contact">
        <Contact />
      </NavButton>
    </nav>
  );
};

export default NavHome;
