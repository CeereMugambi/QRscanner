"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QrScannerModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var qrScanner_routing_module_1 = require("./qrScanner-routing.module");
var generator_component_1 = require("./generator/generator.component");
var forms_1 = require("@angular/forms");
var material_module_1 = require("../material/material.module");
var components_module_1 = require("../components/components.module");
var angularx_qrcode_1 = require("angularx-qrcode");
var scanner_component_1 = require("./scanner/scanner.component");
var ngx_scanner_qrcode_1 = require("ngx-scanner-qrcode");
var QrScannerModule = /** @class */ (function () {
    function QrScannerModule() {
    }
    QrScannerModule = __decorate([
        core_1.NgModule({
            declarations: [
                generator_component_1.GeneratorComponent,
                scanner_component_1.ScannerComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                material_module_1.MaterialModule,
                components_module_1.ComponentsModule,
                angularx_qrcode_1.QRCodeModule,
                qrScanner_routing_module_1.QrScannerRoutingModule,
                ngx_scanner_qrcode_1.NgxScannerQrcodeModule
            ]
        })
    ], QrScannerModule);
    return QrScannerModule;
}());
exports.QrScannerModule = QrScannerModule;
