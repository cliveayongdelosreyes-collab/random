// variable
let player = "Clive";
let health = 100;
let gold = 0;

console.log("Good luck on your journey!");
console.log("Welcome player " + player);
console.log("Your health is " + health);
console.log("Your gold is " + gold);


// array

let enemies = ["goblin", "wolf", "dragon"];
let weapons = ["sword", "bow", "staff"];
let items = ["potion", "shield", "coins"];

console.log("Enemies:", enemies);
console.log("Weapons:", weapons);
console.log("Items:", items);


// condi


let enemyHealth = 50;

if (health > 50) {
    console.log("You are healthy!");
}

if (enemyHealth > 0) {
    console.log("The enemy is alive.");
}

if (gold >= 0) {
    console.log("You can buy items.");
}


// loops

console.log("\nENEMIES");

for (let i = 0; i < enemies.length; i++) {
    console.log(enemies[i]);
}


console.log("\nWEAPONS");

for (let i = 0; i < weapons.length; i++) {
    console.log(weapons[i]);
}


console.log("\nITEMS");

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}


//cclass


// CLASS 1
// Parent Class
class Character {

    // CONSTRUCTOR 1
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    // METHOD 1
    showInfo() {
        console.log(this.name + " has " + this.health + " health.");
    }
}


// CLASS 2
// INHERITANCE 1
class Player extends Character {

    // ENCAPSULATION 1
    #gold = 0;

    // METHOD 2
    showGold() {
        console.log("Gold: " + this.#gold);
    }

    // METHOD 3
    // ABSTRACTION
    battle() {
        console.log("\nBATTLE");
        console.log("You attacked the Goblin!");
    }
}


// CLASS 3
// INHERITANCE 2
class Enemy extends Character {

    // ENCAPSULATION 2
    #damage = 20;

    // METHOD 4
    attack() {
        console.log(this.name + " attacks for " + this.#damage + " damage!");
    }
}


// CLASS 4
class Weapon {

    // CONSTRUCTOR 2
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    // METHOD 5
    showWeapon() {
        console.log("Weapon: " + this.name);
    }
}


// ==========================
// 6. FOUR OBJECTS
// ==========================

let player1 = new Player("Clive", 100);
let goblin = new Enemy("Goblin", 50);
let wolf = new Enemy("Wolf", 60);
let sword = new Weapon("Sword", 20);


// ==========================
// 7. TWO OBJECT LITERALS
// ==========================

let potion = {
    name: "Potion",
    heal: 20
};

let shield = {
    name: "Shield",
    defense: 10
};


// ==========================
// USING THE OBJECTS
// ==========================

player1.showInfo();
player1.showGold();

sword.showWeapon();

player1.battle();

goblin.attack();

console.log("\nGAME OVER");