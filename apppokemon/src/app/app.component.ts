import { Component } from '@angular/core';
import {Pokemon} from "../../../pokemon/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apppokemon';
  now =  new Date();

  pokemon1: Pokemon = new Pokemon("Dracaufeu", 100, 150);
  pok1PV: number = this.pokemon1.pv;
  pokemon2: Pokemon = new Pokemon("Trousselin", 75, 100);
  pok2PV: number = this.pokemon2.pv;
  attack: string = this.pokemon1.speed > this.pokemon2.speed ? this.pokemon1.name : this.pokemon2.name;

  log: string[] = [];
  lose: string = "";

  async fightPoke() {
    let name = this.attack;
    this.pok1PV = this.pokemon1.pv;
    this.pok2PV = this.pokemon2.pv;
    let i = 0;
    while (i != 1) {
      if (name == this.pokemon1.name) {
        this.pok2PV -= getRandom(20,50);
        name = this.pokemon2.name;
        console.log(this.pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.")
        console.log(this.pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n")
        await delay(1000);
      } else if (name == this.pokemon2.name) {
        this.pok1PV -= getRandom(20,50);
        name = this.pokemon1.name;
        console.log(this.pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.")
        console.log(this.pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n")
        await delay(1000);
      }
      if (this.pok2PV <= 0) {
        this.lose = this.pokemon2.name + " a perdu.";
        i = 1;
        name = this.pokemon1.name;
        this.pok2PV = 0;
      } else if (this.pok1PV <= 0) {
        this.lose = this.pokemon1.name + " a perdu.";
        i = 1;
        name = this.pokemon2.name;
        this.pok1PV = 0;
      }

      this.log.push(this.pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.\n");
      this.log.push(this.pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n");
    }
    console.log("Le pokémon qui à gagné est "+name+"\n\n");
  }

  break() {
    //let stop = Observable.interval(this.fightPoke(), 1000);
  }

  reset() {
    this.pok1PV = this.pokemon1.pv;
    this.pok2PV = this.pokemon2.pv;
  }
}

function delay(ms: number) {
  return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}

function getRandom(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
