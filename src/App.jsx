import { Container } from "react-bootstrap";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import React from "react";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default App;
