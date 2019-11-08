const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const contacts = require("./Routes/contacts");
const connectDB = require("./config/db");
const cors = require("cors");

// Load env variable
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

const app = express();

// Body parse
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/contacts", contacts);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
