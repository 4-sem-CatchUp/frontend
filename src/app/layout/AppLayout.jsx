import React from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";

export default function AppLayout() {
  return (
    <div className="app">
      <GlobalHeader />
      <main>
        <Outlet /> {/* this is where the page gets injected */}
      </main>
      <GlobalFooter />
    </div>
  );
}