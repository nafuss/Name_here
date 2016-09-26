import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
import { Injectable } from '@angular/core';

@Injectable()
export class ChampionService {
  getChampions(): Promise<Champion[]> {
    return Promise.resolve(CHAMPIONS);
  }
  getChampion(id: number): Promise<Champion> {
    return this.getChampions()
      .then(champions => champions.find(champion => champion.id === id));
  }
}
