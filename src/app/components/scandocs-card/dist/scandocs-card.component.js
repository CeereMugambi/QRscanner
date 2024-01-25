"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ScandocsCardComponent = void 0;
var core_1 = require("@angular/core");
var ScandocsCardComponent = /** @class */ (function () {
    function ScandocsCardComponent(router) {
        this.router = router;
    }
    ScandocsCardComponent.prototype.onScanButtonClick = function () {
        // Navigate to the route where the webcam feature is implemented
        this.router.navigate(['web-capture']);
        console.log("clicked");
    };
    ScandocsCardComponent = __decorate([
        core_1.Component({
            selector: 'app-scandocs-card',
            templateUrl: './scandocs-card.component.html',
            styleUrls: ['./scandocs-card.component.scss']
        })
    ], ScandocsCardComponent);
    return ScandocsCardComponent;
}());
exports.ScandocsCardComponent = ScandocsCardComponent;
