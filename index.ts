import {firstattack, Pokemon} from "./pokemon/pokemon";

const p1 = new Pokemon(
    "salameche",
    42,
);

const p2 = new Pokemon(
    "carapuce",
    50,
);

const res = firstattack(p1,p2);

console.log(res)

