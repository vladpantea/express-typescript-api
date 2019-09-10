"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const async_wrapper_1 = tslib_1.__importDefault(require("../utilities/async-wrapper"));
const validator_1 = tslib_1.__importDefault(require("../middleware/validator"));
const subscriptions_1 = tslib_1.__importDefault(require("../services/subscriptions"));
class Subscriptions {
    constructor() {
        this.router = express_1.default.Router();
        this.findAll = new async_wrapper_1.default().wrap((req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let subscriptions = yield this.subscriptionService.findAll('');
            res.send(subscriptions);
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
        this.subscriptionService = new subscriptions_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', [this.validator.validate('Subscription', 'read')], this.findAll);
        this.router.get('/:id', this.find);
        this.router.post('/', this.create);
        this.router.delete('/', this.delete);
    }
}
exports.default = Subscriptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9ucy1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3Vic2NyaXB0aW9ucy1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUE4QjtBQUM5Qix1RkFBc0Q7QUFDdEQsZ0ZBQWdEO0FBQ2hELHNGQUE0RDtBQUc1RCxNQUFNLGFBQWE7SUFLZjtRQUpPLFdBQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBaUJ6QixZQUFPLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUVLLFNBQUksR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFBO1FBRU8sV0FBTSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDN0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFTyxXQUFNLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM3RCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtRQTNCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHVCQUFtQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLGdCQUFnQjtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQWtCSjtBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9