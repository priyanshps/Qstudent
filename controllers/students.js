
const { getMaxListeners } = require("../models/students")
const Student = require("../models/students")


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

}


//Create Student 




//Edit Student


//Delete Student


//Show All Students


//Show a student


//Search Students option

