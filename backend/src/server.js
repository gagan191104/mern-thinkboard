import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json()); // this middleware will prade JSON bodies: req.body
app.use(rateLimiter);
// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

// import notesRoutes from "./routes/notesRoutes.js";
// const express = require("express") bothe are same

// "dev": "nodemon server.js"  we use the nodmon during the devlopment once the development is done we use the "start": "node server.js";

// What is Endpoint?
// An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource.

// This code snippet is an route
// ⬇️
// app.get("/app/notes", (req, res) => {
//   res.status(200).send("you got 40 notes");
// });

// if we use id it is for which node to update
// //http:localhost:5001/app/notes/ post id
