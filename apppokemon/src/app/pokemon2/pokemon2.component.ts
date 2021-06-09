import { Component, OnInit } from '@angular/core';
import {firstattack, Pokemon} from "../../../../pokemon/pokemon";

@Component({
  selector: 'app-pokemon2',
  templateUrl: './pokemon2.component.html',
  styleUrls: ['./pokemon2.component.css']
})
export class Pokemon2Component implements OnInit {
  pokemon : Pokemon = new Pokemon("Test", 6, 75);
  static pokemon: Pokemon;

  constructor() {

  }

  ngOnInit(): void {
  }

}
