import "./App.css";
import "./media.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./screens/MainPage";
import StartPage from "./screens/StartPage/StartPage";

function App() {
  const heroes = [
    {
      name: "Warrior",
      health: 8,
      mana: 2,
      abilities: [
        {
          abilityName: "Меченосец",
          abilityDamage: 2,
          abilityMana: 0,
        },
        {
          abilityName: "Стальная защита",
          abilityDamage: -1,
          abilityMana: 1,
        },
        {
          abilityName: "Мощный удар",
          abilityDamage: 4,
          abilityMana: 3,
        },
      ],
    },
    {
      name: "Mage",
      health: 5,
      mana: 8,
      abilities: [
        {
          abilityName: "Огненный шар",
          abilityDamage: 2,
          abilityMana: 0,
        },
        {
          abilityName: "Ледяной щит",
          abilityDamage: -3,
          abilityMana: 3,
        },
        {
          abilityName: "Метеоритный дождь",
          abilityDamage: 6,
          abilityMana: 5,
        },
      ],
    },
    {
      name: "Rogue",
      health: 6,
      mana: 4,
      abilities: [
        {
          abilityName: "Скрытность",
          abilityDamage: -1,
          abilityMana: 0,
        },
        {
          abilityName: "Ядовитый удар",
          abilityDamage: 3,
          abilityMana: 2,
        },
        {
          abilityName: "Метка смерти",
          abilityDamage: 5,
          abilityMana: 4,
        },
      ],
    },
    {
      name: "Archer",
      health: 5,
      mana: 5,
      abilities: [
        {
          abilityName: "Стрела точности",
          abilityDamage: 2,
          abilityMana: 0,
        },
        {
          abilityName: "Быстрый выстрел",
          abilityDamage: 3,
          abilityMana: 2,
        },
        {
          abilityName: "Град стрел",
          abilityDamage: 5,
          abilityMana: 4,
        },
      ],
    },
    {
      name: "Tank",
      health: 10,
      mana: 1,
      abilities: [
        {
          abilityName: "Каменная стена",
          abilityDamage: -2,
          abilityMana: 0,
        },
        {
          abilityName: "Тяжелый удар",
          abilityDamage: 3,
          abilityMana: 2,
        },
        {
          abilityName: "Притягивание внимания",
          abilityDamage: 4,
          abilityMana: 3,
        },
      ],
    },
    {
      name: "Assasin",
      health: 4,
      mana: 5,
      abilities: [
        {
          abilityName: "Коварный удар",
          abilityDamage: 3,
          abilityMana: 0,
        },
        {
          abilityName: "Тень",
          abilityDamage: 5,
          abilityMana: 3,
        },
        {
          abilityName: "Убийственная точность",
          abilityDamage: 7,
          abilityMana: 6,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route element={<StartPage />} path="/" />
        <Route element={<MainPage heroes={heroes} />} path="/main-page" />
      </Routes>
    </div>
  );
}

export default App;
