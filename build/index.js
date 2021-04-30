"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon/pokemon");
var p1 = new pokemon_1.Pokemon("salameche", 55, 90);
var p2 = new pokemon_1.Pokemon("carapuce", 50, 100);
var res = pokemon_1.firstattack(p1, p2);
var vict = pokemon_1.fight(p1, p2, res);
console.log(vict);
