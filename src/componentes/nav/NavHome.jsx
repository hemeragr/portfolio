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
      <NavButton to="/about" text="Descúbreme">
        <About />
      </NavButton>
      <NavButton to="/skills" text="Mis habilidades">
        <Skills />
      </NavButton>
      <NavButton to="/work" text="Mi código">
        <Work />
      </NavButton>
      <NavButton to="/contact" text="Salúdame">
        <Contact />
      </NavButton>
    </nav>
  );
};

export default NavHome;
