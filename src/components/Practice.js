import React from "react";

const Practice = () => {
  const first = "kendrick";
  const last = "sabo";
  const date = new Date();
  const hours = date.getHours() % 12;
  return (
    <div>
      hello there {first} {last}!<div>it is currently {hours} o'clock!</div>
      
    </div>
  );
};

export default Practice;
