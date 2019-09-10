"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncWrapper {
    constructor() {
    }
    wrap(fn) {
        return (req, res, next) => {
            return fn(req, res).catch(next);
        };
    }
}
exports.default = AsyncWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtd3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzeW5jLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFlBQVk7SUFDZDtJQUNBLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBWTtRQUNiLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBYyxFQUFFLEVBQUU7WUFDbkUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxZQUFZLENBQUMifQ==