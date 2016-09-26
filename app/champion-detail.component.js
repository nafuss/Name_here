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
var champion_1 = require('./champion');
// import { Spell } from './spell';
var champion_service_1 = require('./champion.service');
var ChampionDetailComponent = (function () {
    function ChampionDetailComponent(championService, route) {
        this.championService = championService;
        this.route = route;
        this.show = false;
        this.selectedSkins = 1;
        this.level = 1;
    }
    // Setter
    ChampionDetailComponent.prototype.setChampion = function (champion) {
        this.champion = champion;
    };
    ChampionDetailComponent.prototype.ngOnInit = function () {
        // Router getter
        // this.route.params.forEach((params: Params) => {
        //   let id = +params['id'];
        //   this.championService.getChampion(id)
        //     .then(champion => this.champion = champion);
        // });
        console.log(this.isEmpty + 'detail');
    };
    ChampionDetailComponent.prototype.skins = function (skin) {
        this.selectedSkins = skin._id;
    };
    ChampionDetailComponent.prototype.selectSpell = function (spell) {
        this.selectedSpell = spell;
    };
    ChampionDetailComponent.prototype.deselect = function () {
        delete this.selectedSpell;
    };
    ChampionDetailComponent.prototype.calculator = function (event) {
        if (event.target.value) {
            this.level = event.target.value;
        }
        var level = this.level - 1;
        var base = this.champion.stats.health[0];
        var growth = this.champion.stats.health[1];
        this.scale = base + level * growth;
    };
    ChampionDetailComponent.prototype.ngOnChanges = function () {
        if (this.isEmpty == true) {
            console.log(true);
        }
        this.setChampion(this.selectedChampion); // Set champion data with the selected champion
        this.scale = this.champion.stats.health[0]; // Init health bar with base health
        this.show = true;
        // Refract selected champion to search / history log
    };
    ChampionDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', champion_1.Champion)
    ], ChampionDetailComponent.prototype, "selectedChampion", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ChampionDetailComponent.prototype, "isEmpty", void 0);
    ChampionDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-champion-detail',
            templateUrl: 'app/html/champion-detail.component.html',
            styleUrls: ['app/css/champion-detail.component.css'],
            providers: [champion_service_1.ChampionService]
        }), 
        __metadata('design:paramtypes', [champion_service_1.ChampionService, router_1.ActivatedRoute])
    ], ChampionDetailComponent);
    return ChampionDetailComponent;
}());
exports.ChampionDetailComponent = ChampionDetailComponent;
//# sourceMappingURL=champion-detail.component.js.map