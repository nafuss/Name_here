"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var champion_1 = require('./champion');
var champion_service_1 = require('./champion.service');
var SearchComponent = (function () {
    function SearchComponent(championService) {
        this.championService = championService;
        // @Output()
        this._search = '';
        this.historyLogs = [];
        this.notify = new core_1.EventEmitter();
    }
    SearchComponent.prototype.getChampions = function () {
        var _this = this;
        this.championService.getChampions().then(function (champions) { return _this.champions = champions; });
    };
    SearchComponent.prototype.search = function (event) {
        if (event.target.value) {
            var filter = event.target.value;
            this.filter(filter);
        }
        this.notify.emit(this.champions);
    };
    SearchComponent.prototype.filter = function (args) {
        this.getChampions();
        return this.champions = this.champions.filter(function (champion) { return champion.name.toLowerCase().indexOf(args.toLowerCase()) !== -1; });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.getChampions();
    };
    // History Logs
    // quickSelect(champion: Champion): void{
    //   this.champions = [champion]
    //   this.notify.emit(this.champions);
    // }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        // console.log('onChange called')
        // for (let propName in changes) {
        //   let prev = changes[propName].previousValue;
        //   let current = changes[propName].currentValue;
        //   if(current){
        //     this.onFilter(current.name);
        //   }
        // }
    };
    SearchComponent.prototype.reset = function () {
        this.historyLogs = [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', champion_1.Champion)
    ], SearchComponent.prototype, "selectedChampion", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchComponent.prototype, "notify", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/html/search.component.html',
            styleUrls: ['app/css/search.component.css'],
            providers: [champion_service_1.ChampionService],
        }), 
        __metadata('design:paramtypes', [champion_service_1.ChampionService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map