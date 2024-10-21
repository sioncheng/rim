import { UserCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const SidebarTop = () => {
  return (
    <div id="side-bar-top" className="flex w-full">
      <UserCircleIcon className="h-5 w-5" />
      <span className="ml-1 justify-center">用户</span>
      <PlusCircleIcon className="h-5 ml-auto" />
    </div>
  );
};

export default SidebarTop;
