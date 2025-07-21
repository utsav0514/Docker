const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Multi-Stage Node.js App!");
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

