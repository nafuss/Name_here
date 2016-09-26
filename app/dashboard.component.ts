import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Champion } from './champion';
import { ChampionService } from './champion.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/html/dashboard.component.html',
  providers: [ChampionService]
})
export class DashboardComponent implements OnInit{
  champions: Champion[] = [];

  constructor(
    private router: Router,
    private championService: ChampionService
  ) {}

  ngOnInit(): void {
    this.championService.getChampions()
      .then(champions => this.champions = champions.slice(1, 5));
  }

  gotoDetails(champion: Champion): void {
    let link = ['/detail', champion.id];
    this.router.navigate(link);
  }
}
