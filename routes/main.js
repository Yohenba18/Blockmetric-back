const express = require("express");
const router = express.Router();

const { getAllData } = require("../controllers/alldata");
const { getAlgorand } = require("../controllers/algorand");
const { getEthereum } = require("../controllers/ethereum");
const { getSolana } = require("../controllers/solana");
const { getRipple } = require("../controllers/xrpl");
const { getTezos } = require("../controllers/tezos");


router.route("/").get(getAllData);
router.route("/Ethereum").get(getEthereum);
router.route("/Algorand").get(getAlgorand);
router.route("/Solana").get(getSolana);
router.route("/Tezos").get(getTezos);
router.route("/Ripple").get(getRipple);


module.exports = router;
