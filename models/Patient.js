const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({ 

    
    firstName:{type: String,required: true, lowercase: true, trim: true}, 
    lastName:{type:String,required: true, lowercase: true, trim: true},
    email:{type: String, required: true, unique: true},
    screenName:{type:String,required: true, unique: true},
    password:{type:String, required:true},	
    yearofBirth:{type: Number, required: true, min: 1900, max: 2022},
    textBio:{type: String, required: true},
    supportMessage:{type:String},
    records:[{
        recordId:{type:mongoose.Schema.Types.ObjectId, ref: "Record", required: true}}],
    eRate:{type:Number,min:0,max:1},
},
    {timestamps:{createdAt: "createTime",updatedAt:"updateTime"}
});
const Patient = mongoose.model('Patient', patientSchema); 
module.exports = Patient; 


