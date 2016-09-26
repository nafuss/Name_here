import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Champion } from './champion';
// import { Spell } from './spell';
import { ChampionService } from './champion.service';

@Component({
  selector:'my-champion-detail',
  templateUrl: 'app/html/champion-detail.component.html',
  styleUrls: ['app/css/champion-detail.component.css'],
  providers: [ChampionService]
})
export class ChampionDetailComponent implements OnInit, OnChanges{
  @Input() selectedChampion: Champion;
  @Input() isEmpty: boolean;

  public champion: Champion;
  public spellDescription; // :Spell
  public selectedSpell: string;
  public strie: number;
  private show: boolean = false;
  private selectedSkins: number = 1;
  public level: number = 1;
  public scale:number;

  constructor(
    private championService: ChampionService,
    private route: ActivatedRoute,
  ) {}

  // Setter
  setChampion(champion: Champion){
    this.champion = champion;
  }

  ngOnInit(): void {
    // Router getter
    // this.route.params.forEach((params: Params) => {
    //   let id = +params['id'];
    //   this.championService.getChampion(id)
    //     .then(champion => this.champion = champion);
    // });
    console.log(this.isEmpty + 'detail')
  }

  skins(skin): void {
    this.selectedSkins = skin._id;
  }

  selectSpell(spell: string){
    this.selectedSpell = spell;
  }

  deselect(): void{
    delete this.selectedSpell;
  }

  calculator(event): void{
    if(event.target.value){
      this.level = event.target.value
        }
    let level = this.level - 1;
    let base = this.champion.stats.health[0];
    let growth = this.champion.stats.health[1];

    this.scale = base + level * growth;
  }

  ngOnChanges(){
    if(this.isEmpty == true){
      console.log(true)
    }
    this.setChampion(this.selectedChampion); // Set champion data with the selected champion
    this.scale = this.champion.stats.health[0]; // Init health bar with base health
    this.show = true;

    // Refract selected champion to search / history log
  }

  goBack(): void {
    window.history.back();
  }
}
