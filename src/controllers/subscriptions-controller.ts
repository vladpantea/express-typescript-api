import express from "express";
import AsyncWrapper from "../utilities/async-wrapper";
import Validator from "../middleware/validator";
import SubscriptionService from "../services/subscriptions";


class Subscriptions {
    public router = express.Router();
    private validator: Validator;
    private subscriptionService: SubscriptionService;

    constructor() {
        this.validator = new Validator();
        this.subscriptionService = new SubscriptionService();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get('/', [this.validator.validate('Subscription', 'read')], this.findAll);
        this.router.get('/:id', this.find);
        this.router.post('/', this.create);
        this.router.delete('/', this.delete);
    }

    private findAll = new AsyncWrapper().wrap(async (req: express.Request, res: express.Response) => {
        let subscriptions = await this.subscriptionService.findAll('');
        res.send(subscriptions);
    });

    private find = (req: express.Request, res: express.Response) => {
        res.send({});
    }

    private create = (req: express.Request, res: express.Response) => {
        res.sendStatus(201);
    }

    private delete = (req: express.Request, res: express.Response) => {
        res.sendStatus(200);
    }
}

export default Subscriptions;
