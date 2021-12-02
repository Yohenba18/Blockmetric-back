require("dotenv").config();

const express = require("express");
const router = express.Router();

const { getAllData } = require("../controllers/main");
// const { getSolanaData } = require("../controllers/solana/main");

router.route("/").get(getAllData);
// router.route("/Solana").get(getAllData);

module.exports = router;
