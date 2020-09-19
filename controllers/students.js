const { getMaxListeners } = require("../models/students")
const Student = require("../models/students")
const formidable = require("formidable");
const _ = require("lodash")
const fs = require("fs")

// Get Student By its Id 
exports.getStudentById = (req,res,next,id) => {

    Student.findById(id)
    .exec((err, student) => {
        if(err)
        {
            return res.status(400).json({
                error: "Record not found"
            })
        }
        req.studentRecord = student;
    })
    next();

}


//Creating student record 
exports.createRecord = (req,res) => {

    //Object form
    let form = new formidable.IncomingForm();
    form.keepExtensions = true

    form.parse(req, (err, fields, file) => {
        if(err)
        {
            return res.status(400).json({
                error: "Image Error "
            })
        }
      
        const {name, email, phone, degree} = fields

    
        if(!name || !email || !phone || !degree )
        {
            return res.status(400).json({
                error: `Please include all fields name ${name} de ${degree} phone ${phone} email ${email}` 
            })
        }


        let record = new Student(fields)


        //Handling Image 
        if(file.photo )
        {
            if(file.photo.size > 3000000)
            {
                return res.status(400).json({
                    error: "Image size to big"
                })
            }
            record.photo.data =  fs.readFileSync(file.photo.path)
            record.photo.contentType = file.photo.type
        }


        //Saving record
        record.save((err,record) => {

            if(err)
            {
                res.status(400).json({
                    error: "Saveing record fail"
                })
            }

            res.json(record);


        })



    })

    
}



//Edit Student


//Delete Student


//Show All Students


//Show a student


//Search Students option

