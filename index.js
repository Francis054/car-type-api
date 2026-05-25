const fs = require('fs')
const express = require("express");

const app = express();

const data = fs.readFileSync("cars.json", "utf8");

const cars = JSON.parse(data);
app.get("/car", (req, res) => {
  res.send(cars);
});

app.listen(9000, () => {
  console.log("Server running on port 3000");
});