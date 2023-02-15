const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
// const Tem = require("./models/worker")

const authRoute = require('./routes/AuthRoutes');
const BookingRoute = require("./routes/BookingRoutes");
const AvailabiltyRoute = require("./routes/AvailabiltyRoutes");

dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.use("/auth", authRoute);
app.use("/booking",BookingRoute);
app.use("/availability",AvailabiltyRoute);
// app.get("/insert", async (req,res)=> {
//     const tem = new Tem({
//         name: "Ranjith Kumar",
//         role : "doctor",
//         gender : "male",
//         availabile_time : {
//             from: "09:00",
//             to: "17:00"
//         },
//         number: 9500242913,
//         email : "saravanakkumar.20cse@kongu.edu",
//         password : "SAK@2003",
//         photo : "photo",
//         speciality : "general",
//         salary : 50000,
//         location : "erode",
//         experience_years : "5",
//         date_of_joining : '2020-12-09',
//         patients_limit : 10
//     })
//     await tem.save();
//     res.send("done");
// })

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
