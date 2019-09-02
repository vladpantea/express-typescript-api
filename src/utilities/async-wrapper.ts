import express from "express";

class AsyncWrapper {
    constructor() {
    }

    wrap(fn: Function): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: Function) => {
            return fn(req, res).catch(next);
        }
    }
}

export default AsyncWrapper;
