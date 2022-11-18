import dotenv from "dotenv";
dotenv.config();
import express from "express";
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
const app = express();

app.get("/", (req, res) => {
  res.send("raviranjan mahto");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
