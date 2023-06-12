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
    <nav className="nav">
      <NavButton to="/" text="Vuelta a casa">
        <Home />
      </NavButton>
      <NavButton to="/about" text="Descubreme">
        <About />
      </NavButton>
      <NavButton to="/work" text="My codigo">
        <Work />
      </NavButton>
      <NavButton to="/skills" text="Mis habilidades">
        <Skills />
      </NavButton>
      <NavButton to="/contact" text="Salúdame">
        <Contact />
      </NavButton>
    </nav>
  );
};

export default Nav;
