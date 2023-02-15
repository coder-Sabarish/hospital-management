const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FacilitiesSchema = new Schema({

    general_ward_bed : {
        type: Number,
        min:0
    },
    vip_rooms : {
        type : Number,
        min:0
    },
    icu_count: {
        type: Number,
        min:0
    },
    operation_theater_count: {
        type: Number,
        min:0
    },
    ambulence_count : {
        type: Number,
        min:0
    }

});

module.exports = mongoose.model("Facilities", FacilitiesSchema);