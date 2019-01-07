import { Request, Response } from 'express';

import pool from '../database';

class CategoriesController {

    public async list(req: Request, res: Response) {
        const categories = await pool.query('SELECT * FROM categories');
        res.json(categories);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO categories set ?', [req.body]);
        res.json({
            text: 'New category added'
        });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categories = await pool.query('SELECT * FROM categories WHERE id = ?', [id]);
        if(categories.length > 0){
            return res.json(categories[0]);
        }
        
        res.status(404).json({text: 'this ame' + req.params.id});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE categories set ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'updated category'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM categories WHERE id =?', [id]);
        res.json({
            id: 12,
            name: 'delete categorie'
        });
    }
}

const categoriesController = new CategoriesController();

export default categoriesController;