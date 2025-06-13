import React from "react";
import MainNavigation from "./nav-bar/main-navigation";
import { Outlet } from "react-router-dom";

function Layout({isAuthenticated}) {
  return (
    <main>
      <section>
        <div>
          <MainNavigation isAuthenticated={isAuthenticated}/>
        </div>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
