const express = require("express")
const router = express.Router()




const { getStudentById, 
    createRecord, 
    getRecord, 
    photo,
    updateRecord,
    deleteRecord,
    getStudentByEmail,
    getRecordByEmail
} = require('../controllers/students') 

const { update } = require("../models/students")

//Getting student Id by parammeters and passing to getStudentById
router.param("studentId", getStudentById)

router.param("emailId", getStudentByEmail)


//Creating The student record 
router.post("/record/create", createRecord)

// Getting by student id

router.get("/record/:studentId" , getRecord)
router.get("/record/photo/:studentId" , photo)


//Searching Records
router.get("/record/:emailId" , getRecordByEmail)


//Update Student Record
router.put("/record/:studentId", updateRecord)

//Delete Student Record
router.delete("/record/:studentId", deleteRecord)



module.exports = router