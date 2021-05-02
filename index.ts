import {fight, firstattack, Pokemon} from "./pokemon/pokemon";

const p1 = new Pokemon(
    "salameche",
    60,
    90
);

const p2 = new Pokemon(
    "carapuce",
    60,
    100
);


let res = firstattack(p1,p2);
console.log(res+" commence le combat!!")
const vict = fight(p1,p2,res)




