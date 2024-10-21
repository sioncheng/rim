import React from "react";
import SessionList from "./SessionList";
import SessionTop from "./SessionTop";

const Session = () => {
  return (
    <div id="session" className="rounded bg-white p-2 my-2">
      <SessionTop />
      <SessionList />
    </div>
  );
};

export default Session;
