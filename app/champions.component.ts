import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Champion } from './champion';
import { SearchComponent } from './search.component';
import { ChampionService } from './champion.service';

@Component({
  selector: 'my-champions',
  templateUrl: 'app/html/champions.component.html',
  styleUrls: ['app/css/champions.component.css'],
  providers: [ChampionService]
})
export class ChampionsComponent implements OnInit {
  public champions: Champion[];
  public selectedChampion: Champion;
  public isEmpty: boolean = false;

  constructor(
    private router: Router,
    private championService: ChampionService
  ) {}

  // Retrieve champion list from Champion Service
  getChampions(): void {
    this.championService.getChampions().then(champions => this.champions = champions);
  }

  // Get Champion on Initialisation
  ngOnInit (): void {
    this.getChampions();
  }

  // Set selected champion to current champion
  onSelect(nextSelect: Champion): void {
    if(this.selectedChampion == nextSelect){
      // Deselect current target
      this.resetSelected()
      this.getChampions();
    }else{
      // Select the new target
      var newChampions: Champion[] = [nextSelect];
      this.selectedChampion = nextSelect;
      this.champions = newChampions;
    }
  }

  // Event callback when search is done
    onFilter(filtred: Champion[]){
    // Reset previous filter
      this.isEmpty = false;
      this.resetSelected();
    // Load the new champions [] after filter from search
      this.champions = filtred;
    // Select the filtered champion
      if(this.champions.length == 1 && this.selectedChampion !== filtred[0]){
        this.onSelect(this.champions[0])
      }else if(this.champions.length == 0){
        this.isEmpty = true;
        console.log(this.isEmpty + 'champion')
      }
    }

  resetSelected(){
    delete this.selectedChampion;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedChampion.id]);
  }

}
