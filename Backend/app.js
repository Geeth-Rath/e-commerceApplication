require("dotenv").config();
const express = require("express");

const session = require("express-session");
const app = express();
app.use(express.json());

const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");
const logger = require("./logger");

const morgan = require("morgan");
app.use(
  morgan("combined", { stream: { write: (message) => logger.info(message) } })
);


app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use("/auth", userRouter);
app.use("/recommend", productRouter);

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log("server pasword is : ", process.env.MYSQL_PASSWORD);

  console.log("server port is : ", port);
});
