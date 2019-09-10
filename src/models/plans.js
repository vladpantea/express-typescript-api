"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
class PlanValidationSchema {
    constructor() {
        this.getSchema = (type = '') => {
            if (type === 'read') {
                return Joi.object().keys({
                    userId: Joi.number().positive().required()
                });
            }
            else {
                return Joi.object().keys({
                    name: Joi.string().required(),
                    price: Joi.number().positive().allow(0).required(),
                    type: Joi.string().valid('monthly', 'yearly'),
                    userId: Joi.number().positive().required()
                });
            }
        };
    }
}
exports.default = PlanValidationSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBMkI7QUFFM0IsTUFBTSxvQkFBb0I7SUFDdEI7UUFFQSxjQUFTLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBb0IsRUFBRTtZQUNoRCxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7aUJBQzdDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0JBQzdCLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDbEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztvQkFDN0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7aUJBQzdDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFBO0lBZmUsQ0FBQztDQWdCcEI7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQyJ9