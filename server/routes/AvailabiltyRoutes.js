const express = require("express");
const availabile = require("../Controllers/availabiltyController");
const {verifyToken} = require("./../middleware/verifyToken")

const router = express.Router();

router.get("/", verifyToken ,availabile.availabile);

module.exports = router;