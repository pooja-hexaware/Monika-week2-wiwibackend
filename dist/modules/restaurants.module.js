"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const restaurants_controller_1 = require("../controllers/restaurants.controller");
const restaurants_service_1 = require("../services/restaurants.service");
const restaurants_repo_1 = require("../repository/restaurants.repo");
const restaurants_schema_1 = require("../schemas/restaurants.schema");
let restaurantsModule = class restaurantsModule {
};
restaurantsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: restaurants_schema_1.restaurants.name, schema: restaurants_schema_1.restaurantsSchema }])
        ],
        controllers: [restaurants_controller_1.restaurantsController],
        providers: [restaurants_service_1.restaurantsService, restaurants_repo_1.restaurantsRepo],
        exports: [restaurants_service_1.restaurantsService, restaurants_repo_1.restaurantsRepo]
    })
], restaurantsModule);
exports.restaurantsModule = restaurantsModule;
//# sourceMappingURL=restaurants.module.js.map