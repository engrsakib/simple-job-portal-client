import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/sheared/NavBar";

const MainLayouts = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default MainLayouts;
