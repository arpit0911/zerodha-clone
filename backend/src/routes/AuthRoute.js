const { Signup } = require("../controllers/AuthController");
const router = require("express").Router();

router.post("/", Signup);

module.exports = router;
