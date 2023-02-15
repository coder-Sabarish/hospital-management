const facilities = require("./../models/facilities")

exports.availabile = async (req,res) => {
    try{
        facilities.find({}, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                //console.log("First function call : ", docs);
                res.status(201).json(docs[0]);
            }
        });
    }
    catch(err) {
        res.status(500).json({error: err.message});
    }
}