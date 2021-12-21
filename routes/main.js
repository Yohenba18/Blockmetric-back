const express = require("express");
const router = express.Router();

const { getAlgorand } = require("../controllers/getchains/algorand");
const { getEthereum } = require("../controllers/getchains/ethereum");
const { getSolana } = require("../controllers/getchains/solana");
const { getRipple } = require("../controllers/getchains/xrpl");
const { getTezos } = require("../controllers/getchains/tezos");

const { getAllData } = require("../controllers/alldata");
const { getAllTransactions } = require("../controllers/alltransactions");
const { getAllDevelopers } = require("../controllers/alldevelopers");
const { getAllPrice } = require("../controllers/allprices");

//route to get the entire data
//* need to change this
router.route("/").get(getAllData);

//seperate routes for each chain
// not req to change this function this will work even when the routes are changed to database
router.route("/Ethereum").get(getEthereum);
router.route("/Algorand").get(getAlgorand);
router.route("/Solana").get(getSolana);
router.route("/Tezos").get(getTezos);
router.route("/Ripple").get(getRipple);

//routes to get specific data of all chains
//* need to change this
router.route("/Transaction").get(getAllTransactions);
router.route("/Developers").get(getAllDevelopers);
router.route("/Price").get(getAllPrice);

module.exports = router;
