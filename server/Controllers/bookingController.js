const doctor = require("./../models/worker");

exports.book = (req,res) => {
    try{
        const speciality = req.body.speciality;
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
        res.status(500).json({error: err.message});
    }
    
    
}