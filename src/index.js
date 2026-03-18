import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("DevOps App Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});