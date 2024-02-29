import React from "react";
import SelectCard from "./SelectCard";
import Hero from "../../classes/Hero";

const SelectPage = ({ heroes, currentPlayer, selectHero }) => {
  function select(hero) {
    let player = new Hero(
      hero.name,
      hero.health,
      hero.mana,
      hero.abilities
    );
    selectHero(player);
  }

  return (
    <div className="select-page">
      <h1>{currentPlayer} выбирает.</h1>
      <div className="select-card__container">
        {heroes.map((hero, index) => (
          <SelectCard
            hero={hero}
            key={index}
            setCurrentPlayer={() => select(hero)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
