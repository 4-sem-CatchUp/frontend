import React from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";

export default function AppLayout() {
  return (
    <div>
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
      <GlobalFooter />
    </div>
  );
}