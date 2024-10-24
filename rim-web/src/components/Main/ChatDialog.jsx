import React from "react";

import {
  FaceSmileIcon,
  AtSymbolIcon,
  PlusCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ChatDialog = () => {
  return (
    <div
      id="chat-dialog"
      className="rounded border border-slate-500 p-2 relative"
    >
      <div contentEditable={true} className="border-0 outline-none"></div>
      <div className="flex items-center justify-center w-20 bg-slate-400 absolute bottom-2 right-1">
        <FaceSmileIcon className="w-5 h-5 mr-1" />
        <AtSymbolIcon className="w-5 h-5 mr-1" />
        <PlusCircleIcon className="w-5 h-5 mr-1" />
        <PaperAirplaneIcon className="w-5 h-5 mr-auto" />
      </div>
    </div>
  );
};

export default ChatDialog;
