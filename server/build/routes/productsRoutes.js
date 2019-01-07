"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = __importDefault(require("../controllers/productsControllers"));
class ProductsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productsControllers_1.default.list);
        this.router.post('/', productsControllers_1.default.create);
        this.router.delete('/:id', productsControllers_1.default.delete);
        this.router.get('/:id', productsControllers_1.default.getOne);
        this.router.put('/:id', productsControllers_1.default.update);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
