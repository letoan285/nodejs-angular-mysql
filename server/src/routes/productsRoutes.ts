import { Router } from 'express';

import productsControllers from '../controllers/productsControllers';

class ProductsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', productsControllers.list);
        this.router.post('/', productsControllers.create);
        this.router.delete('/:id', productsControllers.delete);
        this.router.get('/:id', productsControllers.getOne);
        this.router.put('/:id', productsControllers.update);
    }
}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;