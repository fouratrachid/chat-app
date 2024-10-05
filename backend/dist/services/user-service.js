"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel = require('../models/userModel');
exports.createUser = async (username, email, password) => {
    return await userModel.createUser(username, email, password);
};
//# sourceMappingURL=user-service.js.map