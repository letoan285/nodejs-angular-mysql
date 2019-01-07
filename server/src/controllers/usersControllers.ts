import { Request, Response } from 'express';

import pool from '../database';

class UsersController {

    public async list(req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO users set ?', [req.body]);
        res.json({
            text: 'New user added'
        });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const users = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        if(users.length > 0){
            return res.json(users[0]);
        }
        
        res.status(404).json({text: 'this ame' + req.params.id});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE users set ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'updated users'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id =?', [id]);
        res.json({
            id: 12,
            name: 'delete user'
        });
    }
}

const usersController = new UsersController();

export default usersController;