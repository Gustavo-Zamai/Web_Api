//Imports and Dependence
import express from "express";
import { Router, Request, Response } from "express";

//Constants Variables
const app = express();
const route = Router();
const PORT = 3000;

app.use(express.json());

//GET Method, display a message DS3
route.get("/", (request: Request, response: Response) => {
  response.json({ message: "Praise the Sun Ashen One !!!" });
});

app.use(route);

app.listen(PORT, () => `Server running on port ${PORT}!/n
Good Job Seeker of Ember!!!`);