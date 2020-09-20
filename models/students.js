const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

    name:
    {   
        type:"String",
        required: true,
        trim:true
    },
    email:
    {
        type:"String",
        required:true,
        unique:true

    },
    phone:
    {
        type:Number,
        required: true,
    },
    photo:
    {
        data: Buffer,
        contentType: String,
    },
    degree:
    {
        type:"String",
        required:true
    }
    
},{timestamps: true})

module.exports = mongoose.model("Students", studentSchema);