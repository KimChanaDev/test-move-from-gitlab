import { ExpressRouter } from "./ExpressRouter.js";

export class GameController extends ExpressRouter
{
    path: string = "/games";
    constructor() {
        super();
        this.initializeRoutes();
    }
    private initializeRoutes(): void
    {
        //this.router.get('');
    }
}