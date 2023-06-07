import { Outlet, useLocation } from "react-router-dom";
import "./App.scss";
import ButtonLigthDark from "./componentes/buttons/ButtonLigthDark";
import Nav from "./componentes/nav/Nav";

function App() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="app">
      <header className="app_header">
        <div className="container-span">
          <span className="ornament space1">&lt;html&gt;</span>
          <br></br>
          <span className="ornament space2">&lt;body&gt;</span>
        </div>
        <div className="content-btn-ld">
          <ButtonLigthDark />
        </div>
        <div className="content-nav-app">{!isHome && <Nav />}</div>
      </header>
      <Outlet />
      <footer className="footer-app">
        <div className="container-span">
          <span className="ornament space2">&lt;/body&gt;</span>
          <br></br>
          <span className="ornament space1">&lt;/html&gt;</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
