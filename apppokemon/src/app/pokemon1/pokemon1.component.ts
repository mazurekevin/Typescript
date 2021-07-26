import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../../../pokemon/pokemon";

@Component({
  selector: 'app-pokemon1',
  templateUrl: "pokemon1.component.html",
  styleUrls: ['./pokemon1.component.css']
})
export class Pokemon1Component {
  pokemon: Pokemon = new Pokemon("Test", 5, 50);
  static pokemon: Pokemon;

  constructor() {
  }

}
