const express = require("express");
const booking = require("../Controllers/bookingController");
const {verifyToken} = require("./../middleware/verifyToken")

const router = express.Router();

router.get("/getdoctors", verifyToken ,booking.getDoctors);
router.post("/", verifyToken ,booking.book);


module.exports = router;