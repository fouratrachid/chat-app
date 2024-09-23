"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// GET request to the root of the server
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// GET request to /hello
app.get('/hello', (req, res) => {
    res.send('Hello from /hello!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Press Ctrl+C to quit.');
});
//# sourceMappingURL=index.js.map