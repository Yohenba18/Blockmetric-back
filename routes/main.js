const express = require("express");
const router = express.Router();

const { getAlgorand } = require("../controllers/getchains/algorand");
const { getEthereum } = require("../controllers/getchains/ethereum");
const { getSolana } = require("../controllers/getchains/solana");
const { getRipple } = require("../controllers/getchains/xrpl");
const { getTezos } = require("../controllers/getchains/tezos");
const { getStellar } = require("../controllers/getchains/stellar");

const {
  DbAllData,
  DbAllPricesData,
  DbAllDeveloperslData,
  DbAllTransactionsData,
} = require("../controllers/DbData");


const { getDevelopersAllData } = require("../controllers/YForDevs/DevelopersAllData");

//route to get the entire data
//* route changed to DbData.js
router.route("/").get(DbAllData);

//routes to get specific data of all chains
//* routes changed to DbData.js
router.route("/Transaction").get(DbAllTransactionsData);
router.route("/Developers").get(DbAllDeveloperslData);
router.route("/Price").get(DbAllPricesData);

//seperate routes for each chain
//* not req to change this function this will work even when the routes are changed to database
router.route("/Ethereum").get(getEthereum);
router.route("/Algorand").get(getAlgorand);
router.route("/Solana").get(getSolana);
router.route("/Tezos").get(getTezos);
router.route("/Ripple").get(getRipple);
router.route("/Stellar").get(getStellar);

//seperate routes for developers for checking valid data
//* not req to change this function this will work even when the routes are changed to database
router.route("/FindoutAllData").get(getDevelopersAllData);



module.exports = router;
