import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./componentes/nav/Nav";
import NightModeToggle from "./componentes/buttons/NightModeToggle";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const storedNightMode = localStorage.getItem("isNightMode") === "true";
    setIsNightMode(storedNightMode);
    document.body.classList.toggle("is-night-mode", storedNightMode);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNightModeToggle = () => {
    const updatedNightMode = !isNightMode;
    setIsNightMode(updatedNightMode);
    localStorage.setItem("isNightMode", updatedNightMode);
    document.body.classList.toggle("is-night-mode", updatedNightMode);
  };

  return (
    <div className="app">
      <div className="content-slider"></div>
      <header className="app_header">
        <div className="container-span">
          <span className="ornament space1">&lt;html&gt;</span>
          <br></br>
          <span className="ornament space2">&lt;body&gt;</span>
        </div>
        <div className="content-btn-ld">
          <NightModeToggle
            isNightMode={isNightMode}
            onToggle={handleNightModeToggle}
          />
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
