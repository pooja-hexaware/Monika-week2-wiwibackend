"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantsDto = void 0;
const openapi = require("@nestjs/swagger");
class restaurantsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { restuarantname: { required: true, type: () => String }, storeId: { required: true, type: () => Number } };
    }
}
exports.restaurantsDto = restaurantsDto;
//# sourceMappingURL=restaurants-dto.dto.js.map