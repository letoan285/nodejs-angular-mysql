import { Router } from 'express';

import usersControllers from '../controllers/usersControllers';

class UsersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', usersControllers.list);
        this.router.post('/', usersControllers.create);
        this.router.delete('/:id', usersControllers.delete);
        this.router.get('/:id', usersControllers.getOne);
        this.router.put('/:id', usersControllers.update);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;