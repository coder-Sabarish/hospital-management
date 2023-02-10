const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogsSchema = new Schema({
    isEmergency:{
        type: Boolean,
        default: false
    },
    patient_id:Schema.ObjectId,
    doctor_id:Schema.ObjectId,
    booking_id:Schema.ObjectId,
    admitted_date:{
        type: Date,
        min:Date.now,
        require: [true,"Date is required"],
    },
    discharge_date:{
        type: Date,
        min:Date.now,
        require: [true,"Date is required"],
    },
    room_alloted:{
        type:String,
    },
    total_amount:{
        type:Number,
        require:[true,"Invalid Input"],
    },
    amount_paid:{
        type:Number,
        require:[true,"Invalid Input"],
    },

    

    
});
module.exports = mongoose.model('Logs',LogsSchema);




    