"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const async_wrapper_1 = tslib_1.__importDefault(require("../utilities/async-wrapper"));
const validator_1 = tslib_1.__importDefault(require("../middleware/validator"));
const plans_1 = tslib_1.__importDefault(require("../services/plans"));
class Plans {
    constructor() {
        this.router = express_1.default.Router();
        this.findAll = new async_wrapper_1.default().wrap((req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let plans = yield this.plansService.findAll('');
            res.send(plans);
        }));
        this.find = (req, res) => {
            res.send({});
        };
        this.create = (req, res) => {
            res.sendStatus(201);
        };
        this.delete = (req, res) => {
            res.sendStatus(200);
        };
        this.validator = new validator_1.default();
        this.plansService = new plans_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', [this.validator.validate('Plan', 'read')], this.findAll);
        this.router.get('/:id', this.find);
        this.router.post('/', this.create);
        this.router.delete('/', this.delete);
    }
}
exports.default = Plans;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYW5zLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThCO0FBQzlCLHVGQUFzRDtBQUN0RCxnRkFBZ0Q7QUFDaEQsc0VBQTZDO0FBRTdDLE1BQU0sS0FBSztJQUtQO1FBSk8sV0FBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFpQnpCLFlBQU8sR0FBRyxJQUFJLHVCQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM1RixJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUVLLFNBQUksR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFBO1FBRU8sV0FBTSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDN0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFTyxXQUFNLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM3RCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtRQTNCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sZ0JBQWdCO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBa0JKO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=