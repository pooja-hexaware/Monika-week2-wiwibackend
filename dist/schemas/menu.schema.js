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
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuSchema = exports.menu = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let menu = class menu {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], menu.prototype, "menuname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], menu.prototype, "menudesc", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], menu.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], menu.prototype, "toppings", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], menu.prototype, "storeid", void 0);
menu = __decorate([
    (0, mongoose_1.Schema)()
], menu);
exports.menu = menu;
exports.menuSchema = mongoose_1.SchemaFactory.createForClass(menu);
//# sourceMappingURL=menu.schema.js.map