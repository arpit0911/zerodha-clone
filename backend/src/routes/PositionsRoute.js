const { getPositions } = require("../controllers/PositionsController");
const router = require("express").Router();

router.get("/", getPositions);

module.exports = router;
