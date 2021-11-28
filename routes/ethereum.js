const express = require("express");
const router = express.Router();
const { getEthereumData } = require("../controllers/ethereum");

router.route("/").get(getEthereumData);

module.exports = router;
