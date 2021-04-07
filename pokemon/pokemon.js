"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstattack = exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function firstattack(pok1, pok2) {
    if (pok1.speed > pok2.speed) {
        return pok1;
    }
    else if (pok1.speed < pok2.speed) {
        return pok2;
    }
    else {
        return pok1;
    }
}
exports.firstattack = firstattack;
