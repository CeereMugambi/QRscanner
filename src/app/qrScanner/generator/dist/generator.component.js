"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GeneratorComponent = void 0;
var core_1 = require("@angular/core");
var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent(dataService, qrdataService) {
        this.dataService = dataService;
        this.qrdataService = qrdataService;
        // Output event emitter for scanned QR code parameters
        this.qrScanned = new core_1.EventEmitter();
        this.ticketId = '';
        this.token = '';
        this.initial_state = {
            allowEmptyString: true,
            errorCorrectionLevel: "L",
            alt: "A custom alt attribute",
            ariaLabel: "QR Code image with the following content...",
            colorDark: "#000000ff",
            colorLight: "#ffffffff",
            cssClass: "center",
            imageSrc: "./assets/angular-logo.png",
            imageHeight: 75,
            imageWidth: 75,
            margin: 4,
            qrdata: '',
            scale: 1,
            width: 300
        };
    }
    GeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params = {
            ticketId: this.ticketId,
            token: this.token
        };
        this.dataService.getParams(this.params).subscribe(function (data) {
            _this.params = data.params !== undefined ? data.params : data;
            if (_this.params) {
                _this.initial_state.qrdata = _this.serializeParams(_this.params);
                // Set the QR code image data in the shared service
                _this.qrdataService.setQRCodeImage(_this.initial_state.qrdata);
                _this.qrScanned.emit(_this.params); // Emit event when QR is scanned
            }
            else {
                console.error('Params is undefined');
            }
        }, function (error) {
            console.error('Error fetching params:', error);
        });
    };
    GeneratorComponent.prototype.serializeParams = function (params) {
        return encodeURIComponent(JSON.stringify(params));
    };
    // Subscribe to the qrScanned event and handle it
    GeneratorComponent.prototype.handleQrScanned = function (scannedParams) {
        // Serialize the parameters before displaying or storing
        var serializedParams = this.serializeParams(scannedParams);
        // Optionally, you can also store it in sessionStorage
        sessionStorage.setItem('QR Scanned. Params:', serializedParams);
        // Display or store the serialized parameters
        console.log('QR Scanned. Params:', serializedParams);
    };
    __decorate([
        core_1.Output()
    ], GeneratorComponent.prototype, "qrScanned");
    GeneratorComponent = __decorate([
        core_1.Component({
            selector: 'app-generator',
            templateUrl: './generator.component.html',
            styleUrls: ['./generator.component.scss']
        })
    ], GeneratorComponent);
    return GeneratorComponent;
}());
exports.GeneratorComponent = GeneratorComponent;
