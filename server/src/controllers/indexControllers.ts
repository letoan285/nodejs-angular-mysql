import {Request, Response} from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        const id = Math.floor(Math.random()*20+1)*125454;
        res.json({
                    id,
                    text: "hello",
                    status: 'OK'
                }
        );
    }
}

export const indexController = new IndexController();