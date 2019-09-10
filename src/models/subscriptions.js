"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
class PlanValidationSchema {
    constructor() {
        this.getSchema = (type = '') => {
            if (type === 'read') {
                return Joi.object().keys({
                    planId: Joi.number().positive().required()
                });
            }
            else {
                return Joi.object().keys({
                    planId: Joi.number().positive().required(),
                    coupon: Joi.number().min(0).max(100).optional().allow(null),
                    cardNumber: Joi.string().creditCard().required(),
                    holderName: Joi.string().alphanum().required(),
                    expirationDate: Joi.string().required(),
                    cvv: Joi.string().min(3).max(3).required()
                });
            }
        };
    }
}
exports.default = PlanValidationSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTJCO0FBRTNCLE1BQU0sb0JBQW9CO0lBQ3RCO1FBRUEsY0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQW9CLEVBQUU7WUFDaEQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO2lCQUM3QyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUMxQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDM0QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0JBQ2hELFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUM5QyxjQUFjLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtvQkFDdkMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtpQkFDN0MsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUE7SUFqQmUsQ0FBQztDQWtCcEI7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQyJ9