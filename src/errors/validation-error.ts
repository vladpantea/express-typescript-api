import CustomError from "./error";

class ValidationError implements CustomError{
    message: string;

    constructor(message:string){
        this.message = message;
    }
}

export default ValidationError;