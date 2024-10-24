import React from "react";
import ChatMessage from "./ChatMessage";
import ChatDialog from "./ChatDialog";

const BottomChat = () => {
  return (
    <div id="bottom-chat" className="flex flex-col h-full relative">
      <div
        id="chat-message-container"
        className="overflow-y-scroll h-auto px-4 py-2"
      >
        dsfsdf message-push-688c4db4b-4xn5d 209m message-push-688c4db4b-7pj2b a
        message-push-688c4db4b-bm8m5 401m message-push-688c4db4b-f5hv9 285m
        message-push-688c4db4b-fhgjl 85m 88m message-push-688c4db4b-bm8m5 401m
        message-push-688c4db4b-f5hv9 285m message-push-688c4db4b-fhgjl 85m 88m
        message-push-688c4db4b-bm8m5 401m message-push-688c4db4b-f5hv9 285m
        <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        message-push-688c4db4b-f5hv9 285m <br />
        <ChatMessage />
      </div>
      <div className="flex-grow"></div>
      <div id="chat-dialog-container" className="mt-1 px-4 py-2 w-full">
        <ChatDialog />
      </div>
    </div>
  );
};

export default BottomChat;
