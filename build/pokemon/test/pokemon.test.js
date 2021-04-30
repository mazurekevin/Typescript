"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../pokemon");
var p1 = new pokemon_1.Pokemon("salameche", 50);
var p2 = new pokemon_1.Pokemon("carapuce", 50);
test('p1>p2', function () {
    expect(pokemon_1.firstattack(p1, p2)).toBe(p1);
});
test('p1<p2', function () {
    expect(pokemon_1.firstattack(p1, p2)).toBe(p2);
});
test('p1==p2', function () {
    expect(pokemon_1.firstattack(p1, p2)).toBe(p1);
});
