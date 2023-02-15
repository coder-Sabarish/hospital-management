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
    date_of_joining: Date,
    specialist: String,
    doctor: String,
    booking_date:{
        type: Date,
        required: [true,"Date is Required"],
        min:Date.now,
    },
    time: {
        from: String,
        to: String
    }

});

module.exports = mongoose.model("Booking", BookingSchema);