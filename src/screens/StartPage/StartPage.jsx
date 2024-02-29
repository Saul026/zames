import React from "react";

import { NavLink } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-page">
      <h5> Правила игры "Замес":</h5>
      <div className="start-page__content">
        <div className="start-page__rule">
          <h3>Начало игры:</h3>
          <p>
            Игра начинается с выбора персонажа. Каждый игрок может выбрать
            персонажа из доступного списка с уникальными характеристиками. У
            каждого персонажа есть определенное количество здоровья(ХП) и
            маны(энергия).
          </p>
        </div>
        <div className="start-page__rule">
          <h3>Ходы:</h3>
          <p>
            Ходы совершаются поочереди. На каждом ходу игрок может выполнить
            действие своего персонажа. Каждый персонаж имеет базовый удар,
            который не требует маны.
          </p>
        </div>
        <div className="start-page__rule">
          <h3>Мана и ХП:</h3>
          <p>
            Каждый персонаж имеет ману, которую можно использовать для
            выполнения способностей. Персонажи теряют здоровье при получении
            урона от ударов противников. Когда ХП опускается до нуля, персонаж
            выбывает из игры.
          </p>
        </div>
        <div className="start-page__rule">
          <h3>Способности:</h3>
          <p>
            Каждый персонаж имеет свои уникальные способности, которые могут
            быть использованы в бою. Существуют спосбности с отрицательным
            уроном, они востанавливают здоровье персонажу, который применил эту
            способность. Так же каждый персонаж может восполнить запас маны на
            1(способность также как и другие передает ход).
          </p>
        </div>
        <div className="start-page__rule">
          <h3>Таймер:</h3>
          <p>
            У каждого игрока на ход есть всего 30 секунд, по истечении которых
            ход передается другому игроку.
          </p>
        </div>
        <div className="start-page__rule">
          <h3>Конец игры:</h3>
          <p>Игра завершается, когда остается только один выживший персонаж.</p>
        </div>
      </div>
      <NavLink className="start" id="start" to="zames/main-page">
        НАЧАТЬ ИГРУ
      </NavLink>
    </div>
  );
};

export default StartPage;