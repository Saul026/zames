import React from "react";

const HUD = ({ health,mana }) => {
  return (
    <div>
      <span>Здоровье: {health} </span>
      <span>Мана: {mana}</span>
    </div>
  );
};

export default HUD;
