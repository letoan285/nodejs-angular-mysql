import { Router } from 'express';

import customersControllers from '../controllers/customersControllers';

class CustomersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', customersControllers.list);
        this.router.post('/', customersControllers.create);
        this.router.delete('/:id', customersControllers.delete);
        this.router.get('/:id', customersControllers.getOne);
        this.router.put('/:id', customersControllers.update);
    }
}

const customersRoutes = new CustomersRoutes();
export default customersRoutes.router;