const router = require("express").Router();
const { getHoldings } = require("../controllers/HoldingsController");

router.get("/", getHoldings);

module.exports = router;
