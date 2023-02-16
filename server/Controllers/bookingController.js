const doctor = require("./../models/worker");
const booking = require("./../models/booking");


exports.getDoctors = (req,res) => {
    try{
        const speciality = req.header("speciality");
        doctor.find({role: "doctor", speciality: speciality}, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                //console.log("First function call : ", docs);
                res.status(201).json(docs);
            }
        });
    }
    catch(err) {
        res.status(505).json({error: err.message});
    }
    
    
}

exports.book = async (req,res) => {
    try{
        const {name,gender,dob,branch,doctor,booking_date} = req.body;

        const newBooking = new booking({
            booking_id:req.user.id,
            name : name,
            gender : gender, 
            dob : dob, 
            branch : branch,
            doctor : doctor,
            booking_date : booking_date
        });
        await newBooking.save();
        res.status(201).json({res: true});
    }
    catch(err) {
        res.status(505).json({error: err.message});
    }
}