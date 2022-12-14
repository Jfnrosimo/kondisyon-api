const { MONGO_URI } = require("./config/keys");

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const port = process.env.RENDER_API;

//middleWare
server.use(morgan("dev"));
server.use(cors());
server.use(bodyParser.json());
server.use(helmet());

//routes
const userRoute = require("./routes/user");
const usertRoute = require("./routes/usert");
const adminRoute = require("./routes/admin");

// Database connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Routes
server.use("/api/v1/user", userRoute);
server.use("/api/v1/usert", usertRoute);
server.use("/api/v1/admin", adminRoute);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
