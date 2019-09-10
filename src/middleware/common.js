"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
class Common {
    constructor(app) {
        app.use(body_parser_1.default.json());
        app.use(morgan_1.default("common"));
        app.use(cors_1.default());
        app.use(helmet_1.default());
    }
}
exports.default = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNFQUFxQztBQUNyQyw0REFBNEI7QUFDNUIsd0RBQXdCO0FBQ3hCLDREQUE0QjtBQUU1QixNQUFNLE1BQU07SUFDUixZQUFZLEdBQXdCO1FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxFQUFFLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9