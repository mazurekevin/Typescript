import { Component } from '@angular/core';
import {Pokemon} from "../../../pokemon/pokemon";
import {interval, Observable, Subscription} from "rxjs";
import {PokemonService} from "./pokemon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'apppokemon';
  now =  new Date();

  pokemonService: PokemonService;

  pokemons: Pokemon[] = [];
  pokemon1: Pokemon = new Pokemon("", 0, 0)
  pokemon2: Pokemon = new Pokemon("", 0, 0)

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  ngOnInit(): void {
    this.pokemonService.apiCallPokemon1().subscribe(data => {
      this.pokemons.push(new Pokemon(data.name, data.speed, data.pv))
    });
    this.pokemonService.apiCallPokemon2().subscribe(data => {
      this.pokemons.push(new Pokemon(data.name, data.speed, data.pv))
    });
    console.log(this.pokemons)

    this.pokemon1 = new Pokemon(this.pokemons[0].name, this.pokemons[0].speed, this.pokemons[0].pv);
    this.pokemon2 = new Pokemon(this.pokemons[1].name, this.pokemons[1].speed, this.pokemons[1].pv);
  }

  fightPoke(): void {
    // this.pokemonService.fightPoke(this.pokemons[0], this.pokemons[1]).then(r => console.log(r))
    console.log("test")
  }
}
