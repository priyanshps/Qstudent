
const Student = require("../models/students")
const formidable = require("formidable");
const _ = require("lodash")
const fs = require("fs");
const router = require("../routes/students");


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

// Get Record by id
exports.getRecord = (req,res) => {
    req.studentRecord.photo = undefined;
    return res.json(req.studentRecord)
}

// Get Student Photo 
exports.photo = (req,res,next) => {

    if(req.studentRecord.photo.data){

        res.set("Content-Type", req.studentRecord.photo.contentType)
        return res.send(req.studentRecord.photo.data)
    }
    next()

}

//Update Student record
exports.updateRecord = (req,res)=> {
    let form = new formidable.IncomingForm() 
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if(err)
        {
            return res.status(400).json({
                error: "Problem wth image"
            })
        }
        const {name, description, price, stock, category} = fields

        //updation code
        let newRecord = req.studentRecord
        record = _.extend(newRecord,fields)


       
        //handle file here
        if(file.photo)
        {
            if(file.photo.size > 3000000)
            {
                return res.status(400).json({
                    error:"File Size to big "
                })
            }
            record.photo.data = fs.readFileSync(file.photo.path);
            record.photo.contentType = file.photo.type;
          
        }
       
        
        record.save((err,record) => {
            if(err)
            {
                return res.status(400).json({
                    error: "Updation product failed"
                })
            }

            res.json(record);

        })
    })
}


//Delete Student record

exports.deleteRecord = (req,res) => {

    let reco = req.studentRecord;
    reco.remove((err, delReco) => {
        if(err)
        {
            return res.status(400).json({
                error: "Failed to delete record"
            })
        }
        res.json({
            message: "Deleted Success ",delReco
        })
    })
}

//Show list of Students
exports.getRecords = (req,res) => {

    Student.find().exec((err,records) => {
        if (err) {
            return res.status(400).json({
              error: "NO Records FOUND"
            });
          }
          res.json(records);    
    })
}



//todo Search Students option

exports.getStudentByEmail = (req,res,next,id) => {

    Student.find({email: id})
    .exec((err, student) => {
        if(err)
        {
            return res.status(400).json({
                error: "Record not found"
            })
        }
        req.studentSearchRecord = student;
    })
    next();

}

exports.getRecordByEmail = (req,res) => {
    return res.json(req.studentSearchRecord)
}