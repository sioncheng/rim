import React from "react";
import SidebarItem from "./SidebarItem";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";

const menus = [
  {
    icon: ChatBubbleLeftRightIcon,
    text: "Messenger",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    text: "Contacts",
  },
];
const SidebarMenu = () => {
  return (
    <div id="sidebar-menu">
      {menus.map((m, i) => (
        <SidebarItem key={i} text={m.text} ICON={m.icon} />
      ))}
    </div>
  );
};

export default SidebarMenu;
