"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        var i = getRandom(0, 1);
        if (i == 0) {
            return pok1.name;
        }
        else {
            return pok2.name;
        }
    }
}
exports.firstattack = firstattack;
function fight(pok1, pok2, attack) {
    return __awaiter(this, void 0, void 0, function () {
        var name, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = attack;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i != 1)) return [3 /*break*/, 6];
                    if (!(name == pok1.name)) return [3 /*break*/, 3];
                    pok2.pv = pok2.pv - getRandom(20, 50);
                    name = pok2.name;
                    console.log(pok1.name + " possède encore " + pok1.pv + " de points de vie.");
                    console.log(pok2.name + " possède encore " + pok2.pv + " de points de vie.\n");
                    return [4 /*yield*/, delay(1000)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    if (!(name == pok2.name)) return [3 /*break*/, 5];
                    pok1.pv = pok1.pv - getRandom(20, 50);
                    name = pok1.name;
                    console.log(pok1.name + " possède encore " + pok1.pv + " de points de vie.");
                    console.log(pok2.name + " possède encore " + pok2.pv + " de points de vie.\n");
                    return [4 /*yield*/, delay(1000)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (pok2.pv <= 0) {
                        i = 1;
                        name = pok1.name;
                    }
                    else if (pok1.pv <= 0) {
                        i = 1;
                        name = pok2.name;
                    }
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, console.log("Le pokémon qui à gagné est " + name)];
            }
        });
    });
}
exports.fight = fight;
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
