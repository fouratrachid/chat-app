"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    if (err.code === '23505') {
        return res.status(409).json({
            message: 'A resource with that data already exists.'
        });
    }
    res.status(500).json({
        message: 'Something went wrong!'
    });
}
//# sourceMappingURL=errorHandler.js.map