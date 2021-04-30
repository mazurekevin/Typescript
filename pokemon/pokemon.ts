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
    return pok1.name;
}
}

export function fight(pok1: Pokemon, pok2:Pokemon,attack: string){
    let name = attack;
    while (! (pok1.pv < 0||pok2.pv <0) ) {
        if(name==pok1.name){
            pok2.pv = pok2.pv-20;
            name = pok2.name;
            console.log(pok2)
        }else if(name==pok2.name){
            pok1.pv = pok1.pv-20;
            name = pok1.name;
            console.log(pok1)
        }

    }
return name;
}