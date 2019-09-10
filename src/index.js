"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const plans_controller_1 = tslib_1.__importDefault(require("./controllers/plans-controller"));
const subscriptions_controller_1 = tslib_1.__importDefault(require("./controllers/subscriptions-controller"));
const middleware_1 = tslib_1.__importDefault(require("./middleware/middleware"));
const error_handler_1 = tslib_1.__importDefault(require("./middleware/error-handler"));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
const app = express_1.default();
new middleware_1.default(app);
app.use('/api/plans', new plans_controller_1.default().router);
app.use('/api/subscriptions', new subscriptions_controller_1.default().router);
new error_handler_1.default(app);
app.listen(PORT, () => {
    console.log(`Application running on port: ${PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsNERBQTRCO0FBQzVCLDhGQUE2RDtBQUM3RCw4R0FBNkU7QUFDN0UsaUZBQWlEO0FBQ2pELHVGQUFpRTtBQUVqRSxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ2YsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixJQUFJLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSwwQkFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLGtDQUF1QixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFcEUsSUFBSSx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVqQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQyJ9