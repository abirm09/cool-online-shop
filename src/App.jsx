import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname == "/") {
      document.title = "HOME | Cool-online-shop";
    } else {
      document.title = `${loc.pathname
        .replace("/", "")
        .toUpperCase()} | Cool-online-shop`;
    }
  }, [loc.pathname]);
  return (
    <>
      <Header />
      <div className="w-full" style={{ minHeight: "calc(100vh - 64px)" }}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
