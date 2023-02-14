const mongoose = require("mongoose");
const {isEmail} = require("validator");

const Schema = mongoose.Schema;
const PatientSchema = new Schema({

    name : {
        type: String,
        required: [true,"Name is Required"]
    },
    gender : {
        type: String,
        required: [true,"Gender is Required"]
    },
    mobile_numer : {
        type: Number,
        required: [true,"mobile number is Required"],
        min: [1000000000, "Enter a Valid Phone number"],
        max: [9999999999, "Enter a Valid Phone number"],
    },
    email : {
        type: String,
        required: [true,"Email id is Required"],
        validate: [ isEmail, 'invalid email' ],
        unique: [true, "Account already exist"]
    },
    password : {
        type: String,
        required: [true,"password cannot be empty"],
        minlength: [8, "Password length must be atleast 8 characters"],
    },
    aadhar_number : {
        type: String,
        required: [true,"Aadhar number is Required"]
    },
    status: {
        type: String,
    },
    has_insurence : {
        type: Boolean,
        default: false
    },
    bill_due : {
        type: Number,
        min: 0
    }
});

module.exports = mongoose.model("Patient", PatientSchema);