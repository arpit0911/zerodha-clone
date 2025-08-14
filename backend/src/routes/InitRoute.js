const {
  InitHoldings,
  InitPositions,
} = require("../controllers/initController");
const router = require("express").Router();

router.get("/holdings", InitHoldings);
router.get("/positions", InitPositions);

module.exports = router;
