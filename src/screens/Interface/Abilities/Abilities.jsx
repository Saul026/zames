import React from "react";
import Ability from "./Ability/Ability";

const Abilities = ({ abilities, useAbility, addMana }) => {
  return (
    <div className="cards">
      {abilities.map((ability, index) => (
        <Ability ability={ability} key={index} useAbility={useAbility} id={index} />
      ))}
      <div className="card" onClick={addMana}>
        <h3>Пополнить ману на 1</h3>
      </div>
    </div>
  );
};

export default Abilities;
