import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div id="side-bar" className="mt-1 p-2 flex flex-col w-full">
      <SidebarTop />
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
