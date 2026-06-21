require("dotenv").config();

const express = require("express");
const cors = require("cors");
const response = require("./response");

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  response(200, { version: "1.0.0", timestamp: new Date().toISOString() }, "SmartQueue POS API is running", res);
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`SmartQueue POS API running on http://localhost:${PORT}`);
});