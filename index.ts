import {fight, firstattack, Pokemon} from "./pokemon/pokemon";

const p1 = new Pokemon(
    "salameche",
    55,
    90
);

const p2 = new Pokemon(
    "carapuce",
    50,
    100
);


let res = firstattack(p1,p2);

const vict = fight(p1,p2,res)

console.log(vict)


