let mongoose = require("mongoose");
let express = require("express");

let cors = require("cors");

let app = express();
app.use(cors());
app.use(express.json());


let userSchema = new mongoose.Schema({

firstName : String,
lastName : String,
age : Number,
email :String,
password : String,
mobile : String,




});

let user = new mongoose.model("user",userSchema);

app.post("/register", async (req,res) =>{

    try{

        let newUser = await new user({

            firstName : req.body.firstName,
            lastName : req.body.lastName,
            age : req.body.age,
            email : req.body.email,
            password : req.body.password,
            mobile : req.body.mobile,
          
          
          
          });
        await  user.insertMany([newUser]);
    res.json({status: "Success", msg:"User Created Successfully"})          

    }catch(err){
    res.json({status:"failure",msg:"Unable to create user",err:err});
    }

console.log("recieved request from client");


console.log(req.body);

// res.json(["user created successfully"]);



})

app.listen(9441,()=>{

    console.log("Port Number Is Ready");
});




let connectToMDB = async() =>{

try{

   await mongoose.connect("mongodb://localhost:27017/registerForm");

   console.log("Connected to MDB Successfully");



}catch(err){
    console.log("Unable to connect to MDB");
}
};


connectToMDB();
