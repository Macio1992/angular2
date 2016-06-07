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
var http_1 = require('@angular/http');
var test_service_1 = require('./test.service');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var TestComponent = (function () {
    function TestComponent(wikipediaService, dragulaServie) {
        this.wikipediaService = wikipediaService;
        this.dragulaServie = dragulaServie;
        dragulaServie.setOptions('first-bag', {
            cancel: true
        });
    }
    TestComponent.prototype.search = function (term) {
        this.items = this.wikipediaService.search(term);
    };
    TestComponent.prototype.onClick = function (item) {
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki',
            templateUrl: 'app/components/test/test.component.html',
            providers: [http_1.JSONP_PROVIDERS, test_service_1.TestService, ng2_dragula_1.DragulaService],
            directives: [ng2_dragula_1.Dragula],
            styleUrls: ['app/components/test/test.css']
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService, ng2_dragula_1.DragulaService])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map