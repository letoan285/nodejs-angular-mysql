"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        const id = Math.floor(Math.random() * 20 + 1) * 125454;
        res.json({
            id,
            text: "hello",
            status: 'OK'
        });
    }
}
exports.indexController = new IndexController();
