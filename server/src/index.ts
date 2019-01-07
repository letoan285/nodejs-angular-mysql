import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import usersRoutes from './routes/usersRoutes';
import productsRoutes from './routes/productsRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
import customersRoutes from './routes/customersRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/api/users', usersRoutes);
        this.app.use('/api/products', productsRoutes);
        this.app.use('/api/categories', categoriesRoutes);
        this.app.use('/api/orders', categoriesRoutes);
        this.app.use('/api/customers', customersRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'));
        console.log(`Server run on port`, this.app.get('port'));
        
    }
}

const server = new Server();
server.start();