import { Request, Response } from 'express';

import pool from '../database';

class User {
    public all() {
        //const users = await pool.query('SELECT * FROM users');
        const users = {
            id: 12,
            username: 'user',
            email: 'user@gmail.com',
            password: 'qq2gq23gq23g'
        }
        return users;
    }
}
const user = new User();
export default user.all();