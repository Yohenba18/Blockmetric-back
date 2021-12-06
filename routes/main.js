require("dotenv").config();

const express = require("express");
const router = express.Router();

const { getAllData } = require("../controllers/alldata");
const { getAlgorand } = require("../controllers/algorand");
const { getEthereum } = require("../controllers/ethereum");

// const { getSolanaData } = require("../controllers/solana/main");

router.route("/").get(getAllData);
router.route("/Ethereum").get(getEthereum);
router.route("/Algorand").get(getAlgorand);
// router.route("/Solana").get(getAllData);

module.exports = router;
