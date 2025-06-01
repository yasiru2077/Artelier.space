import React from "react";
import MainNavigation from "./nav-bar/main-navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <section>
        <div>
          <MainNavigation />
        </div>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
