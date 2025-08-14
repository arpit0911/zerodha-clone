const { addNewOrder } = require("../controllers/OrderController");
const router = require("express").Router();

router.post("/newOrder", addNewOrder);

module.exports = router;
