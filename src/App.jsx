import { Outlet } from "react-router-dom";
import "./App.scss";
import ButtonLigthDark from "./componentes/buttons/ButtonLigthDark";

function App() {
  return (
    <>
      <div className="app">
        <header className="app_header">
          <div className="container-span">
            <span className="ornament">&lt;html&gt;</span>
            <span className="ornament">&lt;body&gt;</span>
            <ButtonLigthDark />
          </div>
        </header>
        <Outlet />
        <footer>
          <div className="topbar-container-span">
            <span className="ornament">&lt;/body&gt;</span>
            <span className="ornament">&lt;/html&gt;</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

