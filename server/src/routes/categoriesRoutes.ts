import { Router } from 'express';

import CategoriesControllers from '../controllers/categoriesControllers';

class CategoriesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', CategoriesControllers.list);
        this.router.post('/', CategoriesControllers.create);
        this.router.delete('/:id', CategoriesControllers.delete);
        this.router.get('/:id', CategoriesControllers.getOne);
        this.router.put('/:id', CategoriesControllers.update);
    }
}

const categoriesRoutes = new CategoriesRoutes();
export default categoriesRoutes.router;