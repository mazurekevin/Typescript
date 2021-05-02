import {promises} from "dns";


export class Pokemon{
    name: string;
    speed: number;
    pv: number;

    constructor(name: string, speed: number, pv: number){
        this.name = name;
        this.speed = speed;
        this.pv = pv;
    }

}

export function firstattack(pok1: Pokemon, pok2:Pokemon){
if(pok1.speed>pok2.speed){
    return pok1.name;
}else if(pok1.speed<pok2.speed){
    return pok2.name;
}else{
    let i = getRandom(0,1);
    if(i==0){
        return pok1.name;
    }else{
        return pok2.name;
    }
}
}

export async function fight(pok1: Pokemon, pok2: Pokemon, attack: string) {
    let name = attack;
    let i = 0;
    while (i != 1) {
        if (name == pok1.name) {
            pok2.pv = pok2.pv - getRandom(20,50);
            name = pok2.name;
            console.log(pok1.name + " possède encore " + pok1.pv + " de points de vie.")
            console.log(pok2.name + " possède encore " + pok2.pv + " de points de vie.\n")
            await delay(1000);
        } else if (name == pok2.name) {
            pok1.pv = pok1.pv - getRandom(20,50);
            name = pok1.name;
            console.log(pok1.name + " possède encore " + pok1.pv + " de points de vie.")
            console.log(pok2.name + " possède encore " + pok2.pv + " de points de vie.\n")
            await delay(1000);
        }
        if (pok2.pv <= 0) {
            i = 1;
            name = pok1.name;
        } else if (pok1.pv <= 0) {
            i = 1;
            name = pok2.name;
        }
    }
    return console.log("Le pokémon qui à gagné est "+name);
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

