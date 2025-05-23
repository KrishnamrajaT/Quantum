const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const vendorRoutes = require("./routes/VenderRoutes");
require('dotenv').config();

const app = express();

mongoose
  .connect("mongodb+srv://quantum:owner@cluster0.w6dyg8z.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors())
// app.get("/", (req, res) => {
//   res.send("Get Method");
// });

app.use("/", vendorRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Running On http://localhost:${PORT}`);
});