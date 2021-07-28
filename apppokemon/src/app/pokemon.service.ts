import {Injectable} from '@angular/core';
import {Pokemon} from "../../../pokemon/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {interval, Subject, Observable, Subscription} from "rxjs";
import {map, takeUntil} from "rxjs/operators";

export interface IPokemon {
  name: string,
  stats: [{
    base_stat: number,
    stat: {
      name: string
    }
  }, {
    base_stat: number,
    stat: {
      name: string
    }
  }, {
    base_stat: number,
    stat: {
      name: string
    }
  }, {
    base_stat: number,
    stat: {
      name: string
    }
  }, {
    base_stat: number,
    stat: {
      name: string
    }
  }, {
    base_stat: number,
    stat: {
      name: string
    }
  }]
}

@Injectable()

export class PokemonService {
  pok1PV: number = 0;
  pokemon1 = new Pokemon("", 0, 0);
  pok2PV: number = 0;
  pokemon2 = new Pokemon("", 0, 0);
  attack: string = "";
  isRunning: Subscription | undefined;

  log: string[] = [];
  lose: string = "";

  constructor(private http: HttpClient) {}

  calculDmg(pokemon: Pokemon, restPv: string): number {
    return pokemon.pv - parseInt(restPv);
  }

  apiCallPokemon1(): Observable<Pokemon> {
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');

    const requestOptions: { headers: HttpHeaders } = {
      headers
    };

    return this.http.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/charizard/', requestOptions)
      .pipe(
        map((pokemonFromApi: IPokemon): Pokemon => {
          return new Pokemon(pokemonFromApi.name, pokemonFromApi.stats[5].base_stat, pokemonFromApi.stats[0].base_stat);
        })
      );

  }

  apiCallPokemon2(): Observable<Pokemon> {
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');

    const requestOptions: { headers: HttpHeaders } = {
      headers
    };

    return this.http.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/klefki/', requestOptions)
      .pipe(
        map((pokemonFromApi: IPokemon): Pokemon => {
          return new Pokemon(pokemonFromApi.name, pokemonFromApi.stats[5].base_stat, pokemonFromApi.stats[0].base_stat);
        })
      );

  }

  /*async fightPoke(pokemon1: Pokemon, pokemon2: Pokemon) {
    const intervalTime = interval(2000);

    this.pok1PV = pokemon1.pv;
    this.pokemon1 = pokemon1;
    this.pok2PV = pokemon2.pv;
    this.pokemon2 = pokemon2;
    this.attack = pokemon1.speed > pokemon2.speed ? pokemon1.name : pokemon2.name;

    this.isRunning = intervalTime.subscribe(async res => {
      this.reset();

      let name = this.attack;
      let i = 0;
      if (this.pokemon1.pv > 0 && this.pokemon2.pv > 0) {
        if (name == pokemon1.name) {
          this.pok2PV -= this.getRandom(20, 50);
          name = pokemon2.name;
          console.log(pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.")
          console.log(pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n")
          await this.delay(1000);
        } else if (name == pokemon2.name) {
          this.pok1PV -= this.getRandom(20, 50);
          name = pokemon1.name;
          console.log(pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.")
          console.log(pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n")
          await this.delay(1000);
        }
        this.pokemon1.pv = this.pok1PV;
        this.pokemon2.pv = this.pok2PV;
        this.fightPoke(this.pokemon1, this.pokemon2);
      } else if (this.pokemon1.pv <= 0 || this.pokemon2.pv <= 0) {
        if (this.pok2PV <= 0) {
          this.lose = pokemon2.name + " a perdu.";
          i = 1;
          name = pokemon1.name;
          this.pok2PV = 0;
        } else if (this.pok1PV <= 0) {
          this.lose = pokemon1.name + " a perdu.";
          i = 1;
          name = pokemon2.name;
          this.pok1PV = 0;
        }
        this.log.push(pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.\n");
        this.log.push(pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n");
      }
      console.log("Le pokémon qui à gagné est " + name + "\n\n");
    })

  }*/

  async fightPoke(pokemon1: Pokemon, pokemon2: Pokemon) {
    this.reset();

    this.pok1PV = pokemon1.pv;
    this.pokemon1 = pokemon1;
    this.pok2PV = pokemon2.pv;
    this.pokemon2 = pokemon2;
    this.attack = pokemon1.speed > pokemon2.speed ? pokemon1.name : pokemon2.name

    let name = this.attack;
    let i = 0;
    while (i != 1) {
      if (name == pokemon1.name) {
        this.pok2PV -= this.getRandom(20,50);
        name = pokemon2.name;
        console.log(pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.")
        console.log(pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n")
        await this.delay(1000);
      } else if (name == pokemon2.name) {
        this.pok1PV -= this.getRandom(20,50);
        name = pokemon1.name;
        console.log(pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.")
        console.log(pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n")
        await this.delay(1000);
      }
      if (this.pok2PV <= 0) {
        this.lose = pokemon2.name + " a perdu.";
        i = 1;
        name = pokemon1.name;
        this.pok2PV = 0;
      } else if (this.pok1PV <= 0) {
        this.lose = pokemon1.name + " a perdu.";
        i = 1;
        name = pokemon2.name;
        this.pok1PV = 0;
      }
      this.log.push(pokemon1.name + " possède encore " + this.pok1PV + " de points de vie.\n");
      this.log.push(pokemon2.name + " possède encore " + this.pok2PV + " de points de vie.\n");
    }
    console.log("Le pokémon qui à gagné est "+name+"\n\n");
  }

  delay(ms: number) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
  }

  getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  reset() {
    this.pok1PV = this.pokemon1.pv;
    this.pok2PV = this.pokemon2.pv;
    this.log = [];
  }

  break() {
    this.isRunning?.unsubscribe();
  }


}
