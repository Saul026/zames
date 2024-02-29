export default class Hero {
  constructor(name, health, mana, abilitiesArray) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.abilitiesArray = abilitiesArray;
  }

  takeDamage(abilityDamage) {
    this.health -= abilityDamage;
  }

  spendMana(abilityManaCost) {
    this.mana -= abilityManaCost;
  }

  useAbility(player, enemy, card) {
    let abilityId = card.currentTarget.getAttribute("id");
    let abilityDamage = this.abilitiesArray[abilityId].abilityDamage;
    let abilityManaCost = this.abilitiesArray[abilityId].abilityMana;

    if (player.id === player.game.state.currentPlayer) {
      if (enemy.health < 1) {
        alert("Вы уже победили!");
      } else if (this.mana >= abilityManaCost) {
        if (abilityDamage < 0) {
          player.selectedHero.takeDamage(abilityDamage);
        } else {
          enemy.takeDamage(abilityDamage);
        }
        if (enemy.health < 1) {
          player.game.gameOver(player.name);
        } else {
          player.selectedHero.spendMana(abilityManaCost);
          player.game.switchPlayer();
        }
      } else alert("Недостаточно маны");
    } else if (this.health < 1) {
      alert("Вы мертвы!");
    } else {
      alert("Ходит другой игрок");
    }
  }

  addMana(player) {
    if (player.game.state.gameOver) {
      alert("Игра уже закончилась, зачем тебе мана?");
    } else if (player.id === player.game.state.currentPlayer) {
      this.mana += 1;
      player.game.switchPlayer();
    } else alert("Ходит другой игрок");
  }
}
