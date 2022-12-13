"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./modules/user.module");
const menu_module_1 = require("./modules/menu.module");
const restaurants_module_1 = require("./modules/restaurants.module");
const toppings_module_1 = require("./modules/toppings.module");
const cart_module_1 = require("./modules/cart.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
            }), mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL, {
                autoCreate: true,
            }),
            user_module_1.userModule,
            menu_module_1.menuModule,
            restaurants_module_1.restaurantsModule,
            toppings_module_1.toppingsModule,
            cart_module_1.cartModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map