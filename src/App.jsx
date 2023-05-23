import { Outlet, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <header className="app_header">
          PORTFOLIO{" "}
          <nav>
            <Link className="app__link" to="/">
              Home
            </Link>
            <Link className="app__link" to="/about">
              About me
            </Link>
            <Link className="app__link" to="/work">
              My códigogit co
            </Link>
            <Link className="app__link" to="/contact">
              Contact
            </Link>
            <Link className="app__link" to="/skills">
              Skills
            </Link>
          </nav>
        </header>
        <Outlet />
        <footer>esto es mi footer</footer>
      </div>
    </>
  );
}

export default App;
