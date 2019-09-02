import * as express from "express";
import * as Joi from "joi";
import Plan from "../models/plans";
import Subscription from "../models/subscriptions";
import ValidationError from "../errors/validation-error";

interface Scope {
    [key: string]: any
}

interface Validators {
    [key: string]: Scope
}

class Validator {
    private plans: Plan;
    private subscriptions: Subscription;
    private validators: Validators;
    
    constructor() {
        this.plans = new Plan();
        this.subscriptions = new Subscription();

        this.validators = {
            Subscription: {
                scopes: {
                    read: this.subscriptions.getSchema('read'),
                    default: this.subscriptions.getSchema()
                }
            },
            Plan: {
                scopes: {
                    read: this.plans.getSchema('read'),
                    default: this.plans.getSchema()
                }
            }
        };
    }

    scopeExists = (validator: any, scope: string = ''): Boolean => {
        return Object.keys(validator.scopes).find(key => key === scope) !== undefined;
    }

    getSchema = (model: string, scope: string = ''): Joi.ObjectSchema => {
        let validator = this.validators[model];
        if (!validator) {
            throw new Error('Validator does not exist');
        }

        if (validator.scopes) {
            if (scope) {
                if (!this.scopeExists(validator, scope)) {
                    throw new Error('Scope does not exist on the validator');
                } else {
                    return validator.scopes[scope];
                }
            } else {
                return validator.scopes.default;
            }
        } else {
            return validator.scopes.default;
        }
    }

    private _validate = (model: string, object: Object, scope: string = ''): Joi.ValidationResult<Object> => {
        return Joi.validate(object, this.getSchema(model, scope), {
            allowUnknown: true
        })
    }

    validate = (model: string, scope: string = '') => {
        return (req: express.Request, res: express.Response, next: Function) => {
            const validationResult = this._validate(model, req.body, scope);

            if (validationResult.error) {
                throw new ValidationError(validationResult.error.message);
            } else {
                next();
            }
        }
    }
}

export default Validator;