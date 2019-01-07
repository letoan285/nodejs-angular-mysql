import { Request, Response } from 'express';

import pool from '../database';

class CustomersController {

    public async list(req: Request, res: Response) {
        const customers = await pool.query('SELECT * FROM customers');
        res.json(customers);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO customers set ?', [req.body]);
        res.json({
            text: 'New customer added'
        });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const customers = await pool.query('SELECT * FROM customers WHERE id = ?', [id]);
        if(customers.length > 0){
            return res.json(customers[0]);
        }
        
        res.status(404).json({text: 'No customer' + req.params.id});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE customers set ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'updated customer'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM customers WHERE id =?', [id]);
        res.json({
            id: 12,
            name: 'delete customer'
        });
    }
}

const customersController = new CustomersController();

export default customersController;