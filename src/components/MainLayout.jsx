import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "../components/Navs";
import AppTitle from "./AppTitle";

function MainLayout() {
  return (
    <div>
      <Navs />
      <AppTitle />
      <Outlet />
    </div>
  );
}

export default MainLayout;
