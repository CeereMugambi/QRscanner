"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SelectpageComponent = void 0;
var core_1 = require("@angular/core");
var SelectpageComponent = /** @class */ (function () {
    function SelectpageComponent(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
    }
    SelectpageComponent.prototype.proceed = function () {
        if (this.selectedUser === 'Staff') {
            this.router.navigate(['/web-capture']); //change route to qrscanner to be implemented
        }
        else if (this.selectedUser === 'Customer') {
            this.router.navigate(['/generator']); //route to documentslist of qr
        }
        else {
            this.openSnackBar('Please kindly select a user.');
        }
    };
    SelectpageComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'close'), {
            duration: 3000,
            panelClass: ['red-snackbar']
        };
    };
    SelectpageComponent = __decorate([
        core_1.Component({
            selector: 'app-selectpage',
            templateUrl: './selectpage.component.html',
            styleUrls: ['./selectpage.component.scss']
        })
    ], SelectpageComponent);
    return SelectpageComponent;
}());
exports.SelectpageComponent = SelectpageComponent;
