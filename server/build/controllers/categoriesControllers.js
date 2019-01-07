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
class CategoriesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield database_1.default.query('SELECT * FROM categories');
            res.json(categories);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO categories set ?', [req.body]);
            res.json({
                text: 'New category added'
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categories = yield database_1.default.query('SELECT * FROM categories WHERE id = ?', [id]);
            if (categories.length > 0) {
                return res.json(categories[0]);
            }
            res.status(404).json({ text: 'this ame' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE categories set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'updated category' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM categories WHERE id =?', [id]);
            res.json({
                id: 12,
                name: 'delete categorie'
            });
        });
    }
}
const categoriesController = new CategoriesController();
exports.default = categoriesController;
