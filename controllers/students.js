
const Students = require("../models/students")
const formidable = require("formidable");
const _ = require("lodash")
const fs = require("fs");
const router = require("../routes/students");


// Get Students By its Id 
exports.getStudentById = (req, res, next, id) => {

    //console.log("id ",id);
    Students.findById(id)
    .exec((err, student) => {
        if(err || !student)
        {
            return res.status(400).json({
                error: "Record not found"
            })
        }
        req.record = student;
        console.log("data1 ",req.record);
        next(); 
    })
    // next(); 
    // console.log("id ",id);
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


        let record = new Students(fields)


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

        console.log(record);
        //Saving record
        record.save((err,record) => {

            if(err)
            {
                res.status(400).json({
                    error: "Saveing record fail",err
                })
            }

            res.json(record);


        })
    })
}

// Get Record by id
exports.getRecord = (req,res) => {
    const inter = req.record;
    console.log("final data ",inter)
    req.record.photo = undefined;
    return res.json(req.record)
}

// Get Students Photo 
exports.photo = (req,res,next) => {

    if(req.record.photo.data){

        res.set("Content-Type", req.record.photo.contentType)
        return res.send(req.record.photo.data)
    }
    next()

}

//Update Students record
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
        console.log(req.record);
        let newRecord = req.record
        newRecord = _.extend(newRecord,fields)


       
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
       
        
        newRecord.save((err,record) => {
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


//Delete Students record

exports.deleteRecord = (req,res) => {

    let reco = req.record;
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

    Students.find().exec((err,records) => {
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

    Students.find({email: id})
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