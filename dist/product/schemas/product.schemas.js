"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=product.schemas.js.map