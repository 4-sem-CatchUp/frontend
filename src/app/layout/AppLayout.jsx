import React from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-gray-900">
      <GlobalHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <GlobalFooter />
    </div>
  );
}