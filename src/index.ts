import express from "express";
import dotenv from "dotenv";
import PlansController from "./controllers/plans-controller";
import SubscriptionsController from "./controllers/subscriptions-controller";
import Middleware from "./middleware/middleware";
import ErrorHandlingMiddleware from "./middleware/error-handler";

dotenv.config()
const PORT = process.env.PORT || 4000;

const app = express();
new Middleware(app);

app.use('/api/plans', new PlansController().router);
app.use('/api/subscriptions', new SubscriptionsController().router);

new ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Application running on port: ${PORT}`);
});
