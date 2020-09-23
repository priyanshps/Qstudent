const express = require("express")
const router = express.Router()

const { getStudentById, 
    createRecord, 
    getRecord,
    getRecords, 
    photo,
    updateRecord,
    deleteRecord,
    getRecordsByName,
  

} = require('../controllers/students') 



//Getting student Id by parammeters and passing to getStudentById
router.param("studentId", getStudentById)



//Creating The student record 
router.post("/record/create", createRecord)

// Getting by student id

router.get("/record/:studentId" , getRecord)
router.get("/record/photo/:studentId" , photo)


//Searching Records
router.get("/search/:name" , getRecordsByName)


//Update Student Record
router.put("/record/:studentId", updateRecord)

//Delete Student Record
router.delete("/record/:studentId", deleteRecord)

//All records 
router.get("/records" ,getRecords)  


module.exports = router

