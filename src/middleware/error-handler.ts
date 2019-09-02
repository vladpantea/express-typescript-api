import * as chalk from "chalk";
import express from "express";
import ValidationError from "../errors/validation-error";

class ErrorLoggerMiddleware {
    constructor(app: express.Application) {
        app.use([
            this.errorLogger,
            this.validationErrorHandler,
            this.genericErrorHandler
        ]);
    }

    errorLogger = (err: Error, req: express.Request, res: express.Response, next: Function) => {
        if (err && err.message) {
            console.log(chalk.default.red(err.message));
        }

        next(err);
    }

    validationErrorHandler = (err: Error, req: express.Request, res: express.Response, next: Function) => {
        if(err instanceof ValidationError){
            return res.sendStatus(400);
        }
        next(err);
    }

    genericErrorHandler = (err: Error, req: express.Request, res: express.Response, next: Function) => {
        res.sendStatus(500);
        next();
    }
}

export default ErrorLoggerMiddleware;