const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

    Name:
    {   
        type:"String",
        required: true,
        trim:true
    },
    Email:
    {
        type:"String",
        required:true,
        unique:true
    },
    Phone:
    {
        type:Number,
        required: true,
        unique: true,
    },
    Photo:
    {
        data: Buffer,
        contentType: String,
    },
    Degree:
    {
        type:"String",
        required:true
    }
    
})

module.exports = mongoose.model("Students", studentSchema);