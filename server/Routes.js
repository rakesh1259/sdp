const { response } = require('express');
const express = require('express');
const router = express.Router()
const signuptemp=require("./models/Registermodel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
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
module.exports=router