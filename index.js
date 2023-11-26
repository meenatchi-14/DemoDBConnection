// import express from "express";

// const app=express();
// const resturants=[
//     {
//         name:"KFC",
//         special:"Crispy Chicken"
//     },
//     {
//         name:"AZB",
//         special:"Sweets"
//     }
// ]
// //get info
// app.get("/res",(req,res)=>{
//     res.send(resturants);
// app.post("./add/res",(req,res)=>{
//     console.log(req.body)
//     res.send("posting data");
// })
// } )
// ///listen to the server
// app.listen(9000,()=>console.log("server started in Localhost:9000"))
import express from "express";
import { doctorRouter } from "./Routes/doctor.js";

// intiating server
const app = express();

//middlewares
app.use(express.json());

//initiating PORT
const PORT = 9000;

// applicational routes
app.use("/doctor", doctorRouter);

//listening to a server
app.listen(PORT, () => console.log(`Server listning in localhost:${PORT}`));