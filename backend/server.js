const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tweets", require("./routes/tweetRoutes"));

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening to port");
});
