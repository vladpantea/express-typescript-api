import * as express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

class Common {
    constructor(app: express.Application) {
        app.use(bodyParser.json());
        app.use(morgan("common"));
        app.use(cors());
        app.use(helmet());
    }
}

export default Common;
