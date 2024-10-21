import React from "react";
import ChatMessage from "./ChatMessage";
import ChatDialog from "./ChatDialog";

const BottomChat = () => {
  return (
    <div id="bottom-chat" className="flex flex-col h-full ">
      <div id="chat-message-container" className="block overflow-y-scroll p-2">
        <ChatMessage />
        <p>0o</p>
        <p>0o</p>
        <p>0o</p>
        <p>0o</p>
        <p>0o</p>
        <p>0o</p>
        <p>0o</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>c</p>
      </div>
      <hr />
      <div id="chat-dialog-container" className="flex flex-col mt-1  h-32 p-2">
        <ChatDialog />
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default BottomChat;
