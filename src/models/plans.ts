import * as Joi from "joi";

class PlanValidationSchema {
    constructor() { }

    getSchema = (type: string = ''): Joi.ObjectSchema => {
        if (type === 'read') {
            return Joi.object().keys({                
                userId: Joi.number().positive().required()
            });
        } else {
            return Joi.object().keys({
                name: Joi.string().required(),
                price: Joi.number().positive().allow(0).required(),
                type: Joi.string().valid('monthly', 'yearly'),
                userId: Joi.number().positive().required()
            });
        }
    }
}

export default PlanValidationSchema;
