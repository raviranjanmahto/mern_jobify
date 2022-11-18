import express from "express";
import notFoundMiddleware from "./middleware/notFound.js";
const app = express();

app.get("/", (req, res) => {
  res.send("raviranjan mahto");
});

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
