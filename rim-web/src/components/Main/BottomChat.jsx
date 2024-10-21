import React from "react";
import ChatMessage from "./ChatMessage";
import ChatDialog from "./ChatDialog";

const BottomChat = () => {
  return (
    <div
      id="bottom-chat"
      className="border-4 border-blue-400 flex flex-col h-full"
    >
      <div
        id="chat-message-container"
        className="border border-black block overflow-y-scroll"
        style={{ height: "calc(100%)" }}
      >
        <ChatMessage />
        <p>d</p>
        <p>d</p>
        <p>d</p> <p>d</p>
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
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>c</p>
      </div>
      <div
        id="chat-dialog-container"
        className="h-32 border-8 border-yellow-600"
      >
        <ChatDialog />
      </div>
    </div>
  );
};

export default BottomChat;
