"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartDto = void 0;
const openapi = require("@nestjs/swagger");
class cartDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { itemname: { required: true, type: () => String }, itemquantity: { required: true, type: () => String }, itemprice: { required: true, type: () => Number } };
    }
}
exports.cartDto = cartDto;
//# sourceMappingURL=cart-dto.dto.js.map