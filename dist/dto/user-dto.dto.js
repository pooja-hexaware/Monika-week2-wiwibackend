"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDto = void 0;
const openapi = require("@nestjs/swagger");
class userDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String } };
    }
}
exports.userDto = userDto;
//# sourceMappingURL=user-dto.dto.js.map