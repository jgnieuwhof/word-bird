import express from "express";

import { PORT } from "./config";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
