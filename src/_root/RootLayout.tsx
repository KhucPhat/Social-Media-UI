import { LeftSidebar, Topbar } from "@/components/shared";
import Bottombar from "@/components/shared/Bottombar";
import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};
