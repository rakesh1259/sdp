const mongoose = require('mongoose');
const flighttemplate = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Message:{
        type: String,
         default: currentDate,
      
    }
})
module.exports=mongoose.model('flights',flighttemplate)