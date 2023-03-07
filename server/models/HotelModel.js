const mongoose = require('mongoose');
const hoteltemplate = new mongoose.Schema({
    location:{
        type:String,
        required:true
    },
    TypeofRoom:{
        type:String,
        required:true
    },
    checkin:{
        type: Date,
         default: Date.now ,
        required:true
    },
    checkout:{
        type: Date,
         default: Date.now ,
        required:true
    },
    Guests:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('hotels',hoteltemplate)