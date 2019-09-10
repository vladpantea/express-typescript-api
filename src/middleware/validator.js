"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
const plans_1 = tslib_1.__importDefault(require("../models/plans"));
const subscriptions_1 = tslib_1.__importDefault(require("../models/subscriptions"));
const validation_error_1 = tslib_1.__importDefault(require("../errors/validation-error"));
class Validator {
    constructor() {
        this.scopeExists = (validator, scope = '') => {
            return Object.keys(validator.scopes).find(key => key === scope) !== undefined;
        };
        this.getSchema = (model, scope = '') => {
            let validator = this.validators[model];
            if (!validator) {
                throw new Error('Validator does not exist');
            }
            if (validator.scopes) {
                if (scope) {
                    if (!this.scopeExists(validator, scope)) {
                        throw new Error('Scope does not exist on the validator');
                    }
                    else {
                        return validator.scopes[scope];
                    }
                }
                else {
                    return validator.scopes.default;
                }
            }
            else {
                return validator.scopes.default;
            }
        };
        this._validate = (model, object, scope = '') => {
            return Joi.validate(object, this.getSchema(model, scope), {
                allowUnknown: true
            });
        };
        this.validate = (model, scope = '') => {
            return (req, res, next) => {
                const validationResult = this._validate(model, req.body, scope);
                if (validationResult.error) {
                    throw new validation_error_1.default(validationResult.error.message);
                }
                else {
                    next();
                }
            };
        };
        this.plans = new plans_1.default();
        this.subscriptions = new subscriptions_1.default();
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
}
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlEQUEyQjtBQUMzQixvRUFBbUM7QUFDbkMsb0ZBQW1EO0FBQ25ELDBGQUF5RDtBQVV6RCxNQUFNLFNBQVM7SUFLWDtRQW9CQSxnQkFBVyxHQUFHLENBQUMsU0FBYyxFQUFFLFFBQWdCLEVBQUUsRUFBVyxFQUFFO1lBQzFELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUNsRixDQUFDLENBQUE7UUFFRCxjQUFTLEdBQUcsQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxFQUFvQixFQUFFO1lBQ2hFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDL0M7WUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksS0FBSyxFQUFFO29CQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO3FCQUM1RDt5QkFBTTt3QkFDSCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2xDO2lCQUNKO3FCQUFNO29CQUNILE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ25DO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNuQztRQUNMLENBQUMsQ0FBQTtRQUVPLGNBQVMsR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxFQUFnQyxFQUFFO1lBQ3BHLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RELFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtRQUVELGFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLEVBQUUsRUFBRTtZQUM3QyxPQUFPLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQWMsRUFBRSxFQUFFO2dCQUNuRSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRWhFLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFO29CQUN4QixNQUFNLElBQUksMEJBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdEO3FCQUFNO29CQUNILElBQUksRUFBRSxDQUFDO2lCQUNWO1lBQ0wsQ0FBQyxDQUFBO1FBQ0wsQ0FBQyxDQUFBO1FBNURHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO1FBRXhDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxZQUFZLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtpQkFDMUM7YUFDSjtZQUNELElBQUksRUFBRTtnQkFDRixNQUFNLEVBQUU7b0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO2lCQUNsQzthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0E0Q0o7QUFFRCxrQkFBZSxTQUFTLENBQUMifQ==