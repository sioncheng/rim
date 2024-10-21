import React from "react";
import {
  UsersIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/16/solid";

import {
  UsersIcon as UsersIconOutline,
  MagnifyingGlassIcon,
  UserPlusIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const TopChat = () => {
  return (
    <div id="top-chat" className="flex pt-1">
      <UsersIcon className="h-11 mr-1" />
      <div className="ml-1 w-[100%]">
        <div id="session-top" className="flex items-center justify-center">
          <span className="inline-block align-middle text-xl">聊天群名称</span>
          <div className="flex ml-3 text-gray-500">
            <UsersIconOutline className="h-3" />
            <span className="ml-1 text-sm inline-block align-bottom leading-none">
              3
            </span>
          </div>
          <div
            id="session-action"
            className="ml-auto pr-2 flex text-gray-500 items-center justify-center"
          >
            <div className="ml-2 p-1 hover:bg-gray-300 hover:rounded">
              <MagnifyingGlassIcon className="h-4" />
            </div>
            <div className="ml-2 p-1 hover:bg-gray-300 hover:rounded">
              <UserPlusIcon className="h-4" />
            </div>
            <div className="ml-2 p-1 hover:bg-gray-300 hover:rounded">
              <EllipsisHorizontalIcon className="h-4" />
            </div>
          </div>
        </div>
        <div id="session-second" className="flex mt-1 pb-1">
          <div id="sessionTip" className="rounded bg-blue-100 flex">
            <div className="inline-block align-middle leading-none p-1">
              <ChatBubbleOvalLeftEllipsisIcon className="h-4 text-blue-600" />
            </div>
            <div className="inline-block align-middle text-xm leading-none py-1 pr-1">
              Chat
            </div>
          </div>
          <div className="ml-2 inline-block align-middle text-xm leading-none p-1 px-2 rounded hover:bg-slate-100">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChat;
