"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = __importDefault(require("../controllers/usersControllers"));
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersControllers_1.default.list);
        this.router.post('/', usersControllers_1.default.create);
        this.router.delete('/:id', usersControllers_1.default.delete);
        this.router.get('/:id', usersControllers_1.default.getOne);
        this.router.put('/:id', usersControllers_1.default.update);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
