const express = require("express");
const app = express();
const ethereumRouter = require("./routes/ethereum");

app.get("/", (req, res) => {
  res.send('<a href="/api/v1/ethereum">Ethereum route</a>');
});

app.use("/api/v1/ethereum", ethereumRouter);

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

start()