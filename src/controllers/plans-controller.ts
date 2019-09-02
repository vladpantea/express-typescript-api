import express from "express";
import AsyncWrapper from "../utilities/async-wrapper";
import Validator from "../middleware/validator";
import PlansService from "../services/plans";

class Plans {
    public router = express.Router();
    private validator: Validator;
    private plansService: PlansService;

    constructor() {
        this.validator = new Validator();
        this.plansService = new PlansService();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get('/', [this.validator.validate('Plan','read')], this.findAll);
        this.router.get('/:id', this.find);
        this.router.post('/', this.create);
        this.router.delete('/', this.delete);
    }

    private findAll = new AsyncWrapper().wrap(async (req: express.Request, res: express.Response) => {
        let plans = await this.plansService.findAll('');
        res.send(plans);
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

export default Plans;
