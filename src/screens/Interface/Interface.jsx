import React from "react";
import HUD from "./HUD/HUD";
import Abilities from "./Abilities/Abilities";

const Interface = ({ player }) => {
  return (
    <div>
      <HUD health={player.selectedHero.health} mana={player.selectedHero.mana}/>
      <Abilities
        abilities={player.selectedHero.abilitiesArray}
        useAbility={(card) => {
          player.selectedHero.useAbility(player, player.enemyHero, card);
        }}
        addMana={() => {
          player.selectedHero.addMana(player);
        }}
      />
    </div>
  );
};

export default Interface;
