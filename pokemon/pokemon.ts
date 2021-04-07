export class Pokemon{
    name: string;
    speed: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }

}

export function firstattack(pok1: Pokemon, pok2:Pokemon){
if(pok1.speed>pok2.speed){
    return pok1;
}else if(pok1.speed<pok2.speed){
    return pok2;
}else{
    return pok1;
}
}