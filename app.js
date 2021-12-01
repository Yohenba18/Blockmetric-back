const express = require("express");
const app = express();
const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
  res.send('<a href="/api/v1/">All data route</a>');
});

app.use("/api/v1/", mainRouter);

//errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
