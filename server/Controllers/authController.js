const Patient = require("./../models/patients");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* Signup Function */

exports.signup = async (req,res) => {
    try{
        const {name, mobile_numer, aadhar_number, email, password, gender, has_insurence} = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new Patient({
            name : name,
            mobile_numer : mobile_numer, 
            aadhar_number : aadhar_number, 
            email : email,
            password : passwordHash,
            gender : gender,
            has_insurence : has_insurence,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err) {
        res.status(500).json({error: err.message});
    }
};

/* Login Function */

exports.login = async(req,res) => {
    
    try{
        const {email,password} = req.body;
        var user =  await Patient.findOne({email : email})
        if(!user) return res.status(400).json({msg: `User not found`});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: `Invalid credintials`});
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRECT);
        delete user[password];
        res.status(200).json({token,user});
    }
    catch(err){
        res.status(401).json({msg : err.message});
    }
};