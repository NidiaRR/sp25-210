function attack(enemyDef) {
    const dmg = this.atk - enemyDef;
    if (dmg <= 0) {
        return 0;
    } else {
        return dmg;
    }
}

//Objects
const person = {
    //Properties (Variables that belong to this obejcts)
    name: "Nidia",
    hp: 8,
    def: 0,
    atk: 2,
    spd: 3,

    //Methods (functions that bleong to this object)
    attack: attack

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};


const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk:1,
    spd: 1,


    attack () {
        return this.atk;
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};

//N attacks slime
const nDmg = person.attack(enemy.def);
console.log(nDmg);
console.log("Slime HP:", enemy.hp);

enemy.takeDamage(nDmg);
console.log("Slime HP:", enemy.hp);


const characters = {
    { name: "Bob", hp: 2, atk:1},
    { name: "Henry", hp: 2, atk:1},
    { name: "Ty", hp: 2, atk:1},
    { name: "Susan", hp: 2, atk:1},
}