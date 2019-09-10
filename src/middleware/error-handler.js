"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk = tslib_1.__importStar(require("chalk"));
const validation_error_1 = tslib_1.__importDefault(require("../errors/validation-error"));
class ErrorLoggerMiddleware {
    constructor(app) {
        this.errorLogger = (err, req, res, next) => {
            if (err && err.message) {
                console.log(chalk.default.red(err.message));
            }
            next(err);
        };
        this.validationErrorHandler = (err, req, res, next) => {
            if (err instanceof validation_error_1.default) {
                return res.sendStatus(400);
            }
            next(err);
        };
        this.genericErrorHandler = (err, req, res, next) => {
            res.sendStatus(500);
            next();
        };
        app.use([
            this.errorLogger,
            this.validationErrorHandler,
            this.genericErrorHandler
        ]);
    }
}
exports.default = ErrorLoggerMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStCO0FBRS9CLDBGQUF5RDtBQUV6RCxNQUFNLHFCQUFxQjtJQUN2QixZQUFZLEdBQXdCO1FBUXBDLGdCQUFXLEdBQUcsQ0FBQyxHQUFVLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQWMsRUFBRSxFQUFFO1lBQ3RGLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDL0M7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUE7UUFFRCwyQkFBc0IsR0FBRyxDQUFDLEdBQVUsRUFBRSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBYyxFQUFFLEVBQUU7WUFDakcsSUFBRyxHQUFHLFlBQVksMEJBQWUsRUFBQztnQkFDOUIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFBO1FBRUQsd0JBQW1CLEdBQUcsQ0FBQyxHQUFVLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQWMsRUFBRSxFQUFFO1lBQzlGLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUE7UUF6QkcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxzQkFBc0I7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQjtTQUMzQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBcUJKO0FBRUQsa0JBQWUscUJBQXFCLENBQUMifQ==