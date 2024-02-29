import React from 'react'

const SelectCard = ({hero, setCurrentPlayer}) => {
  return (
    <div className='card'>
        <div className='card__info'>
            <h2>{hero.name}</h2>
            <span>Здоровье: {hero.health}</span>
            <span>Мана: {hero.mana}</span>
        </div>
        <button onClick={setCurrentPlayer}>Выбрать героя</button>
    </div>
  )
}

export default SelectCard