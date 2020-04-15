const express = require("express");
const app = express();
const ignore = "ignore";
const carRouter = require("./routes");
const port = process.env.PORT || 4001;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use("/api/cars", carRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
