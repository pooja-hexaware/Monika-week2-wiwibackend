"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDto = void 0;
const openapi = require("@nestjs/swagger");
class menuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { menuname: { required: true, type: () => String }, menudesc: { required: true, type: () => String }, price: { required: true, type: () => Number }, toppings: { required: true, type: () => [String] }, storeid: { required: true, type: () => Number } };
    }
}
exports.menuDto = menuDto;
//# sourceMappingURL=menu-dto.dto.js.map