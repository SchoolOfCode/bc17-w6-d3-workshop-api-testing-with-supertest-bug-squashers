import { test ,expect } from "vitest" 
import { express} from "express"
import { require } from "supertest" 
import app from "./app.js";

test("GET /api/health works", () => {

}) 

/*app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});