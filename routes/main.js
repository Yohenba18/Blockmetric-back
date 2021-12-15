const express = require("express");
const router = express.Router();

const { getAllData } = require("../controllers/alldata");
const { getAlgorand } = require("../controllers/getchains/algorand");
const { getEthereum } = require("../controllers/getchains/ethereum");
const { getSolana } = require("../controllers/getchains/solana");
const { getRipple } = require("../controllers/getchains/xrpl");
const { getTezos } = require("../controllers/getchains/tezos");
const { getAllTransactions } = require("../controllers/alltransactions");
const { getAllDevelopers } = require("../controllers/alldevelopers");
const { getAllPrice } = require("../controllers/allprices");

//route to get the entire data
router.route("/").get(getAllData);

//seperate routes for each chain
router.route("/Ethereum").get(getEthereum);
router.route("/Algorand").get(getAlgorand);
router.route("/Solana").get(getSolana);
router.route("/Tezos").get(getTezos);
router.route("/Ripple").get(getRipple);

//routes to get specific data of all chains
router.route("/Transaction").get(getAllTransactions);
router.route("/Developers").get(getAllDevelopers);
router.route("/Price").get(getAllPrice);

module.exports = router;
