const express = require("express");
const app = express();
const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const cors = require("cors");
const { eventFunction } = require("./event/event");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    '<a href="/api/v1/">All data route</a><br/><a href="/api/v1/Solana">Solana route</a>'
  );
});

app.use("/api/v1/", mainRouter);

//errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    eventFunction()
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
