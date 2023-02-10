const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookingSchema = new Schema({

    patient_id: {
        type: Schema.ObjectId,
        required: [true,"Patient ID is Required"]
    },
    guardian : String,
    guardian_number: {
        type: String,
        min: [1000000000, "Enter a Valid Phone number"]
    },
    issue_catagery: {
        type: String,
        required: [true,"Issue_catagery is Required"]
    },
    booking_date:{
        type: Date,
        required: [true,"Date is Required"],
        min:Date.now,
    }

});

module.exports = mongoose.model("Booking", BookingSchema);