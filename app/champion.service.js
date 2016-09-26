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
var mock_champions_1 = require('./mock-champions');
var core_1 = require('@angular/core');
var ChampionService = (function () {
    function ChampionService() {
    }
    ChampionService.prototype.getChampions = function () {
        return Promise.resolve(mock_champions_1.CHAMPIONS);
    };
    ChampionService.prototype.getChampion = function (id) {
        return this.getChampions()
            .then(function (champions) { return champions.find(function (champion) { return champion.id === id; }); });
    };
    ChampionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChampionService);
    return ChampionService;
}());
exports.ChampionService = ChampionService;
//# sourceMappingURL=champion.service.js.map