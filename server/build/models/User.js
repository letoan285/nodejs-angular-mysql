"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    all() {
        //const users = await pool.query('SELECT * FROM users');
        const users = {
            id: 12,
            username: 'user',
            email: 'user@gmail.com',
            password: 'qq2gq23gq23g'
        };
        return users;
    }
}
const user = new User();
exports.default = user.all();
