"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cart_controller_1 = require("../controllers/cart.controller");
const cart_service_1 = require("../services/cart.service");
const cart_repo_1 = require("../repository/cart.repo");
const cart_schema_1 = require("../schemas/cart.schema");
let cartModule = class cartModule {
};
cartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: cart_schema_1.cart.name, schema: cart_schema_1.cartSchema }])
        ],
        controllers: [cart_controller_1.cartController],
        providers: [cart_service_1.cartService, cart_repo_1.cartRepo],
        exports: [cart_service_1.cartService, cart_repo_1.cartRepo]
    })
], cartModule);
exports.cartModule = cartModule;
//# sourceMappingURL=cart.module.js.map