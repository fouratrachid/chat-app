"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = __importDefault(require("./routes/index.js"));
app_js_1.default.use((0, morgan_1.default)("dev"));
const port = 3002;
const { Client } = require('pg');
app_js_1.default.use("api/v1", index_js_1.default);
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '123456',
    database: 'postgres'
});
client.connect();
client.query('Select NOW(); ', (err, res) => {
    if (!err) {
        console.log(res);
    }
    else {
        console.log(err.message);
    }
    client.end();
});
app_js_1.default.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map