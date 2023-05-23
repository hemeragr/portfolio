import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./views/about/About.jsx";
import Contact from "./views/contact/Contact.jsx";
import Home from "./views/home/Home.jsx";
import Skills from "./views/skills/Skills.jsx";
import Work from "./views/work/Work.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto.</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "skills", element: <Skills /> },
      { path: "work", element: <Work /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
