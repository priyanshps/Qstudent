const express = require("express")
const router = express.Router()


const { getStudentById } = require('../controllers/students') 

//Getting student Id by parammeters and passing to getStudentById
router.param("studentId", getStudentById)





module.exports = router