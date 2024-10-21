import React from "react";
import SessionList from "./SessionList";
import SessionTop from "./SessionTop";

const Session = () => {
  return (
    <div id="session" className="rounded bg-white p-2 mt-1 flex flex-col">
      <SessionTop />
      <SessionList />
    </div>
  );
};

export default Session;
