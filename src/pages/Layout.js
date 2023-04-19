import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
