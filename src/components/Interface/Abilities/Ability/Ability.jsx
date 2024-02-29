import React from 'react'

const Ability = ({ability, useAbility, id}) => {
  return (
    <div className='card' onClick={useAbility} id={id}>
        <h3>{ability.abilityName}</h3>
        <span>Урон: {ability.abilityDamage}{ability.abilityDamage < 0 ? '(лечение)' : ''}</span>
        <span>Мана: {ability.abilityMana}</span>
    </div>
  )
}

export default Ability