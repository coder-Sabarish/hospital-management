const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const authRoute = require('./routes/AuthRoutes')

dotenv.config();
const app = express();

//middlewares
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


//Routes
app.use("/auth", authRoute);
app.use("/", (req,res)=> {res.send("fs");});

//mongoose connection
const PORT = process.env.PORT || 6000;

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useunifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`DB connected Successfully`));
})
.catch((error) => console.log(`${error} did not connect`));

console.log(`Server running at port ${PORT}`);
