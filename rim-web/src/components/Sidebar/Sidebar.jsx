import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div id="side-bar" className="mt-2 p-2 w-[15%]">
      <SidebarTop />
      <SidebarMenu />
      Sidebar
    </div>
  );
};

export default Sidebar;
