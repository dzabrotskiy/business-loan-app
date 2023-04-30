"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BusinessesModule = void 0;
var common_1 = require("@nestjs/common");
var businesses_controller_1 = require("./businesses.controller");
var businesses_service_1 = require("./businesses.service");
var BusinessesModule = /** @class */ (function () {
    function BusinessesModule() {
    }
    BusinessesModule = __decorate([
        (0, common_1.Module)({
            controllers: [businesses_controller_1.BusinessesController],
            providers: [businesses_service_1.BusinessesService]
        })
    ], BusinessesModule);
    return BusinessesModule;
}());
exports.BusinessesModule = BusinessesModule;
