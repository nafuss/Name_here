import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: true
})
@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(champions: any[], args: any[]): any {
    if(champions == null){
      return null;
    }
    return champions.filter(champion => champion.name.indexOf(args[0]) !== -1);
  }
}
// Better not filter this way
