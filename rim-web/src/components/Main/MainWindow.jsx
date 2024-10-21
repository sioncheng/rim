import React from "react";
import TopChat from "./TopChat.jsx";
import BottomChat from "./BottomChat.jsx";

const MainWindow = () => {
  return (
    <div id="main-window" className="mt-1 h-full flex flex-col">
      <div
        id="top-container"
        className="w-full h-16 flex flex-col mb-1 bg-white rounded"
      >
        <TopChat />
        <div className="flex-grow"></div>
      </div>
      <div
        id="bottom-container"
        className="flex flex-col bg-white rounded"
        style={{ height: "calc(100% - 4.5rem)" }}
      >
        <BottomChat />
      </div>
    </div>
  );
};

export default MainWindow;
