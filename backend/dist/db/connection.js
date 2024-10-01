"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const { Pool } = pg_1.default;
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '123456',
    database: 'chat_app'
});
exports.default = pool;
//# sourceMappingURL=connection.js.map