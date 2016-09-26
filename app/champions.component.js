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
var router_1 = require('@angular/router');
var champion_service_1 = require('./champion.service');
var ChampionsComponent = (function () {
    function ChampionsComponent(router, championService) {
        this.router = router;
        this.championService = championService;
        this.isEmpty = false;
    }
    // Retrieve champion list from Champion Service
    ChampionsComponent.prototype.getChampions = function () {
        var _this = this;
        this.championService.getChampions().then(function (champions) { return _this.champions = champions; });
    };
    // Get Champion on Initialisation
    ChampionsComponent.prototype.ngOnInit = function () {
        this.getChampions();
    };
    // Set selected champion to current champion
    ChampionsComponent.prototype.onSelect = function (nextSelect) {
        if (this.selectedChampion == nextSelect) {
            // Deselect current target
            this.resetSelected();
            this.getChampions();
        }
        else {
            // Select the new target
            var newChampions = [nextSelect];
            this.selectedChampion = nextSelect;
            this.champions = newChampions;
        }
    };
    // Event callback when search is done
    ChampionsComponent.prototype.onFilter = function (filtred) {
        // Reset previous filter
        this.isEmpty = false;
        this.resetSelected();
        // Load the new champions [] after filter from search
        this.champions = filtred;
        // Select the filtered champion
        if (this.champions.length == 1 && this.selectedChampion !== filtred[0]) {
            this.onSelect(this.champions[0]);
        }
        else if (this.champions.length == 0) {
            this.isEmpty = true;
            console.log(this.isEmpty + 'champion');
        }
    };
    ChampionsComponent.prototype.resetSelected = function () {
        delete this.selectedChampion;
    };
    ChampionsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedChampion.id]);
    };
    ChampionsComponent = __decorate([
        core_1.Component({
            selector: 'my-champions',
            templateUrl: 'app/html/champions.component.html',
            styleUrls: ['app/css/champions.component.css'],
            providers: [champion_service_1.ChampionService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, champion_service_1.ChampionService])
    ], ChampionsComponent);
    return ChampionsComponent;
}());
exports.ChampionsComponent = ChampionsComponent;
//# sourceMappingURL=champions.component.js.map