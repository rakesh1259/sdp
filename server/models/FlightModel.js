const mongoose = require('mongoose');
const flighttemplate = new mongoose.Schema({
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    typeoftravel:{
        type:String,
        required:true
    },
    dateofjourney:{
        type: Date,
         default: Date.now ,
        required:true
    },
    dateofreturn:{
        type: Date,
        default: Date.now ,
        required:true
    },
    passengers:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('flights',flighttemplate)