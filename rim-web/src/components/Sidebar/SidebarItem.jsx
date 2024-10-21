import React from "react";

const SidebarItem = (props) => {
  const { text, ICON } = props;
  return (
    <div className="flex">
      <ICON className="h-5 text-green-800" />
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default SidebarItem;
