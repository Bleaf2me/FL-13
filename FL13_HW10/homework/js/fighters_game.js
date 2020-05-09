class Fighter {
  constructor (properties) {
    let _fighterName = properties.name;
    let _fighterDamage = properties.damage;
    let _fighterHp = properties.hp;
    let _fighterStrength = properties.strength;
    let _fighterAgility = properties.agility;
    let _win = 0;
    let _loss = 0;
    let _defaultHP = properties.hp;

    this.getName = function () {
      return _fighterName;
    };

    this.getDamage = function () {
      return _fighterDamage;
    };

    this.getHealth = function () {
      return _fighterHp;
    };

    this.getDefaultHp = function () {
      return _defaultHP;
    };

    this.setHp = function (hp) {
      _fighterHp = hp > this.getDefaultHp() ? this.getDefaultHp() : hp;
      return _fighterHp;
    };

    this.getStrength = function () {
      return _fighterStrength;
    };

    this.getAgility = function () {
      return _fighterAgility;
    };

    this.getWin = function () {
      return _win;
    };

    this.setWin = function (count) {
      _win = count;
      return _win;
    };

    this.getLoss = function () {
      return _loss;
    };

    this.setLoss = function (count) {
      _loss = count;
      return _loss;
    };
  }

  dealDamage (damage) {
    let hpAfterAttack = this.getHealth() - damage > 0 ? this.getHealth() - damage : 0;
    return hpAfterAttack;
  }

  attack (opponent) {
    let percent = 100;
    let random = Math.random()*percent;
    let isAttack = false;
    let hitRait = percent - (opponent.getStrength() + opponent.getAgility());
 
    if (random < hitRait) {
      isAttack = true;
    }

    if (isAttack) {
      opponent.setHp(opponent.dealDamage(opponent.getDamage()));
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${opponent.getName()}`);
     
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  logCombatHistory () {
    console.log(`Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLoss()}`);
  }
  
  Heal (hp) {
    this.setHp(this.getHealth() + hp);
  }

  addWin () {
    this.setWin(this.getWin() + 1);
  }

  addLoss () {
    this.setLoss(this.getLoss() + 1);
  }
}

function battle (fighter1, fighter2) {

  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  } else {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);

      if (fighter2.getHealth() === 0) {
        console.log(`${fighter1.getName()} has won!`);
        fighter1.addWin();
        fighter2.addLoss();
        break;
      }

      fighter2.attack(fighter1);

      if (fighter1.getHealth() === 0) {
        console.log(`${fighter2.getName()} has won!`);
        fighter2.addWin();
        fighter1.addLoss();
      }
    }
  } 
}