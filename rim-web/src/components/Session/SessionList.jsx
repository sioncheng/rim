import React from "react";
import SessionItem from "./SessionItem";

const sessions = [
  {
    text: "session",
  },
  {
    text: "session",
  },
  {
    text: "session",
  },
];

const SessionList = () => {
  return (
    <div id="session-list">
      SessionList
      {sessions.map((s, i) => (
        <SessionItem key={i} text={s.text} />
      ))}
    </div>
  );
};

export default SessionList;
