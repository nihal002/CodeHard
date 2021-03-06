import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-interview-prepration',
  templateUrl: './interview-prepration.component.html',
  styleUrls: ['./interview-prepration.component.css']
})
export class InterviewPreprationComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
