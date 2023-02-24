const { response } = require('express');
const express = require('express');
const router = express.Router()
const signuptemp=require("./models/Registermodel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const FlightModel = require('./models/FlightModel');
router.post('/register',async (req,res)=>{
    const saltpwd = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(req.body.password,saltpwd);
    const signupuser = new signuptemp({
        name:req.body.name,
        email:req.body.email,
        password:securepassword
    })
    signupuser.save()
    .then(data=>{
        res.json(data);
    })
    .catch(e=>{
        res.json(e);
    })
});
router.post('/flight',async(req,res)=>{
    const source=req.body.source;
  const destination=req.body.destination;
  const typeoftravel = req.body.typeoftravel;
  const dateofjourney= req.body.doj;
  const ReturnDate=req.body.dor;
  const passengers=req.body.passengers;
  const flight = new FlightModel({source:source, destination:destination,typeoftravel:typeoftravel,dateofjourney:dateofjourney,ReturnDate:ReturnDate,passengers:passengers});
  try{
    await flight.save();
    res.send("Inserted Values");
  }
    catch(err){
      console.log(err);
    }
})
module.exports=router