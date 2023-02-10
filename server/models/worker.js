const mongoose = require("mongoose");
const {isEmail} = require("validator");

const Schema = mongoose.Schema;
const WorkerSchema = new Schema({

    name : {
        type: String,
        required: [true,"Name is Required"]
    },
    role : {
        type: String,
        required: [true,"Role is Required"]
    },
    gender: {
        type: String,
        required: [true,"Gender is Required"]
    },
    availabile: {
        type: Boolean,
        default: true
    },
    availabile_time : {
        from : {
            type: String,
            required: [true,"available time is Required"]
        },
        to : {
            type: String,
            required: [true,"available time is Required"]
        }
    },
    number : {
        type: Number,
        required: [true,"mobile number is Required"],
        min: [1000000000, "Enter a Valid Phone number"],
        max: [9999999999, "Enter a Valid Phone number"],
    },
    email : {
        type: String,
        required: [true,"Email id is Required"],
        validate: [ isEmail, 'invalid email' ],
        unique : [true, "Account already exist"]
    },
    password : {
        type: String,
        required: [true,"password cannot be empty"],
        minlength: [8, "Password length must be atleast 8 characters"],
    },
    photo: {
        type: String,
        required: [true,"Photo is Required"]
    },
    speciality: String,
    salary: {
        type: Number,
        required: [true,"Salary is Required"]
    },
    location: {
        type: String,
        required: [true,"location is Required"]
    },
    experience_years: {
        type: Number,
        required: [true,"Experience Years is Required"]
    },
    date_of_joining: {
        type: Date,
        required: [true,"Joining Date is Required"]
    },
    date_of_quiting: Date,
    patients_assigned : {
        type: [Schema.ObjectId]
    },
    patients_limit : {
        type: Number,
        required: [true,"patients_limit is Required"]
    },
    active: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model("Booking", WorkerSchema);