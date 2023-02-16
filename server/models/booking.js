const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookingSchema = new Schema({

    booking_id: {
        type: Schema.ObjectId,
        required: [true,"Patient ID is Required"]
    },
    name : String,

    gender : {
        type: String,
        required: [true,"Gender is Required"]
    },
    dob: String,
    branch: String,
    doctor: String,
    booking_date:{
        type: String,
        required: [true,"Date is Required"],
    },

});

module.exports = mongoose.model("Booking", BookingSchema);