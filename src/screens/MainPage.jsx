import React from "react";
import Game from "../classes/Game";

const MainPage = ({ heroes }) => {
  let player1Name = prompt("Введите имя игрока №1", "Игрок №1");
  let player2Name = prompt("Введите имя игрока №2", "Игрок №2");

  return (
    <>
      <Game
        heroes={heroes}
        currentPlayer={1}
        player1Name={player1Name}
        player2Name={player2Name}
      />
    </>
  );
};

export default MainPage;
