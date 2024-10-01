"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserById = exports.createUser = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const createUser = async (name, email, password) => {
    const query = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, name, email
    `;
    const values = [name, email, password];
    const res = await connection_1.default.query(query, values);
    return res.rows[0];
};
exports.createUser = createUser;
const getUserById = async (id) => {
    const query = "SELECT id, name, email FROM users WHERE id = $1";
    const res = await connection_1.default.query(query, [id]);
    return res.rows[0];
};
exports.getUserById = getUserById;
const getAllUsers = async () => {
    const query = "SELECT id, name, email FROM users";
    const res = await connection_1.default
        .query(query);
    return res.rows;
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user-model.js.map