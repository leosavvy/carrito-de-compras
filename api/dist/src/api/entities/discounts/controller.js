"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsController = void 0;
const repository_1 = require("./repository");
class DiscountsController {
    constructor() {
        this.discountsRepository = new repository_1.DiscountsRepository();
    }
    getAllDiscounts(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.discountsRepository.getDiscounts(filters || {});
        });
    }
    getDiscountByBrands(brands) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.discountsRepository.getDiscounts({ brand: { $in: brands } });
        });
    }
}
exports.DiscountsController = DiscountsController;
//# sourceMappingURL=controller.js.map