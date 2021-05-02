"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon/pokemon");
var p1 = new pokemon_1.Pokemon("salameche", 60, 90);
var p2 = new pokemon_1.Pokemon("carapuce", 60, 100);
var res = pokemon_1.firstattack(p1, p2);
console.log(res + " commence le combat!!");
var vict = pokemon_1.fight(p1, p2, res);
