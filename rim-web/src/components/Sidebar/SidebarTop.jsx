import { UserCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const SidebarTop = () => {
  return (
    <div id="side-bar-top" className="flex">
      <UserCircleIcon className="h-5 w-5" />
      <span className="ml-1 justify-center">用户</span>
      <PlusCircleIcon className="h-5 m-auto" />
    </div>
  );
};

export default SidebarTop;
