"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesControllers_1 = __importDefault(require("../controllers/categoriesControllers"));
class CategoriesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriesControllers_1.default.list);
        this.router.post('/', categoriesControllers_1.default.create);
        this.router.delete('/:id', categoriesControllers_1.default.delete);
        this.router.get('/:id', categoriesControllers_1.default.getOne);
        this.router.put('/:id', categoriesControllers_1.default.update);
    }
}
const categoriesRoutes = new CategoriesRoutes();
exports.default = categoriesRoutes.router;
