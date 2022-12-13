"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingsDto = void 0;
const openapi = require("@nestjs/swagger");
class toppingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tname: { required: true, type: () => String }, tdesc: { required: true, type: () => String }, price: { required: true, type: () => Number } };
    }
}
exports.toppingsDto = toppingsDto;
//# sourceMappingURL=toppings-dto.dto.js.map