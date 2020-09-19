const express = require("express")
const router = express.Router()




const { getStudentById , createRecord} = require('../controllers/students') 

//Getting student Id by parammeters and passing to getStudentById
router.param("studentId", getStudentById)


//Creating The student record 
router.post("/create", createRecord)


module.exports = router