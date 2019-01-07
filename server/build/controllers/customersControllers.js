"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CustomersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield database_1.default.query('SELECT * FROM customers');
            res.json(customers);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO customers set ?', [req.body]);
            res.json({
                text: 'New customer added'
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const customers = yield database_1.default.query('SELECT * FROM customers WHERE id = ?', [id]);
            if (customers.length > 0) {
                return res.json(customers[0]);
            }
            res.status(404).json({ text: 'No customer' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE customers set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'updated customer' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM customers WHERE id =?', [id]);
            res.json({
                id: 12,
                name: 'delete customer'
            });
        });
    }
}
const customersController = new CustomersController();
exports.default = customersController;
