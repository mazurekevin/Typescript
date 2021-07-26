import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../../../pokemon/pokemon";

@Component({
  selector: 'app-pokemon2',
  templateUrl: './pokemon2.component.html',
  styleUrls: ['./pokemon2.component.css']
})
export class Pokemon2Component {
  pokemon : Pokemon = new Pokemon("Test", 6, 75);
  static pokemon: Pokemon;

  constructor() {
  }


}
