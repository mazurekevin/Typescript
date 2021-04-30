"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = exports.firstattack = exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, pv) {
        this.name = name;
        this.speed = speed;
        this.pv = pv;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function firstattack(pok1, pok2) {
    if (pok1.speed > pok2.speed) {
        return pok1.name;
    }
    else if (pok1.speed < pok2.speed) {
        return pok2.name;
    }
    else {
        return pok1.name;
    }
}
exports.firstattack = firstattack;
function fight(pok1, pok2, attack) {
    var name = attack;
    console.log(pok2.name);
    while (!(pok1.pv < 0 || pok2.pv < 0)) {
        if (name == pok1.name) {
            pok2.pv = pok2.pv - 20;
            name = pok2.name;
            console.log(pok2);
        }
        else if (name == pok2.name) {
            pok1.pv = pok1.pv - 20;
            name = pok1.name;
            console.log(pok1);
        }
    }
    return name;
}
exports.fight = fight;
