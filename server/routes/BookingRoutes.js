const express = require("express");
const booking = require("../Controllers/bookingController");
const {verifyToken} = require("./../middleware/verifyToken")

const router = express.Router();

router.post("/", verifyToken ,booking.book);


module.exports = router;