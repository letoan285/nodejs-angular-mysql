"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customersControllers_1 = __importDefault(require("../controllers/customersControllers"));
class CustomersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', customersControllers_1.default.list);
        this.router.post('/', customersControllers_1.default.create);
        this.router.delete('/:id', customersControllers_1.default.delete);
        this.router.get('/:id', customersControllers_1.default.getOne);
        this.router.put('/:id', customersControllers_1.default.update);
    }
}
const customersRoutes = new CustomersRoutes();
exports.default = customersRoutes.router;
