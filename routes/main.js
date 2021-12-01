require('dotenv').config();

const express = require("express");
const router = express.Router();
const { getEthereumData } = require("../controllers/ethereum/main");
const { getSolanaData } = require("../controllers/solana/main");

router.route("/Ethereum").get(getEthereumData);
router.route("/Solana").get(getSolanaData);

module.exports = router;
