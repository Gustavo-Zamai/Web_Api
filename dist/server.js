"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
const PORT = 3000;
app.use(express_1.default.json());
route.get("/", (request, response) => {
    response.json({ message: "Praise the Sun Ashen One !!!" });
});
app.use(route);
app.listen(PORT, () => `Server running on port ${PORT}!/n
Good Job Seeker of Ember!!!`);
