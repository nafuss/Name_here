import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChange } from '@angular/core'

import { Champion } from './champion';
import { ChampionService } from './champion.service';

@Component({
  selector: 'search',
  templateUrl: 'app/html/search.component.html',
  styleUrls: ['app/css/search.component.css'],
  providers: [ChampionService],
})

export class SearchComponent implements OnInit, OnChanges {
  // @Output()
  public _search:string = '';
  public historyLogs = [];
  public champions: Champion[];

  @Input() selectedChampion: Champion;
  @Output() notify: EventEmitter<Champion[]> = new EventEmitter<Champion[]>();
  constructor(
    private championService: ChampionService
  ){}

  getChampions(): void {
    this.championService.getChampions().then(champions => this.champions = champions);
  }
  search(event) {
    if(event.target.value){
      let filter:string = event.target.value
      this.filter(filter);
      }
    this.notify.emit(this.champions)
  }
  filter(args): Champion[] {
    this.getChampions();
    return this.champions = this.champions.filter(champion => champion.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }
  ngOnInit(): void {
    this.getChampions();
  }
  // History Logs
  // quickSelect(champion: Champion): void{
  //   this.champions = [champion]
  //   this.notify.emit(this.champions);
  // }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // console.log('onChange called')
    // for (let propName in changes) {
    //   let prev = changes[propName].previousValue;
    //   let current = changes[propName].currentValue;
    //   if(current){
    //     this.onFilter(current.name);
    //   }
    // }
  }
  reset():void {
    this.historyLogs = [];
  }
  //OnChange fire filtersearch
}
