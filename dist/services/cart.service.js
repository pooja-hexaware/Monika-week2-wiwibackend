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
exports.cartService = void 0;
const common_1 = require("@nestjs/common");
const cart_repo_1 = require("../repository/cart.repo");
let cartService = class cartService {
    constructor(cartRepo) {
        this.cartRepo = cartRepo;
    }
    async findAll() {
        return this.cartRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.cartRepo.create(data);
    }
    async update(cartId, data) {
        return this.cartRepo.update(cartId, data);
    }
    async delete(cartId) {
        return this.cartRepo.delete(cartId);
    }
};
cartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repo_1.cartRepo])
], cartService);
exports.cartService = cartService;
//# sourceMappingURL=cart.service.js.map