import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";

const SessionTop = () => {
  return (
    <div id="session-top" className="flex">
      <Bars3BottomLeftIcon className="h-5" />
      <span className="ml-1">Chats</span>
    </div>
  );
};

export default SessionTop;
