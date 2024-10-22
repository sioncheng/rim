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
      className="rounded border border-slate-500 p-4 min-h-16 max-h-36"
      contentEditable={true}
    >
      <div className="relative ml-4">
        &nbsp;
        <div className="flex w-20 bg-slate-400 absolute bottom-0 right-0">
          <FaceSmileIcon className="w-5 h-5" />
          <AtSymbolIcon className="w-5 h-5" />
          <PlusCircleIcon className="w-5 h-5" />
          <PaperAirplaneIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;
