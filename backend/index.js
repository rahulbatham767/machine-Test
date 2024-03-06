const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

// Routes
app.use("/api/v1/employees", require("./routes/EmployeeRoute"));
app.use("/api/v1/user", require("./routes/UserRoute"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
