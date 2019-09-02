import * as express from "express"
import Common from "./common";

class Middleware{
    constructor(app: express.Application){
        new Common(app);
    }
}

export default Middleware;