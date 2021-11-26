const express = require("express");
const router = express.Router();
const { getEthHashRate } = require("../controllers/ethereum");

router.route("/").get(getEthHashRate);

module.exports = router;
