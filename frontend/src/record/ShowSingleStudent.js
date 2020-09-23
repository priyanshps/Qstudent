import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'
import ImageLoader from './helper/ImageLoader'
import { getRecord } from './helper/recordapicall'

export default function ShowSingleStudent(props) {
    const [Record, setRecord] = useState([])
    const [Error, setError] = useState()

    const loadRecord = (studentId) => {
        getRecord(studentId)
        .then(data => {
            if(data.error)
            {
                setError(data.error)
            }
            setRecord(data)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        loadRecord(props.match.params.studentId)
         
    }, [])

    
    return (

        <>
        <Base />
        <div className="container mt-5">
           
            <div className="row pt-4">
                <div className="col-9">
                    <Link to="/show">Go Back</Link>
                    <div className="card mt-1"> 
                    <h5 class="card-header">Profile</h5>                       
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Name </h5>
                            <p className="card-text">{Record.name}</p>
                            <h5 className="card-title font-weight-bold">Email </h5>
                            <p className="card-text">{Record.email}</p>
                            <h5 className="card-title font-weight-bold">Phone </h5>
                            <p className="card-text">{Record.phone}</p>
                            <h5 className="card-title font-weight-bold">Degree </h5>
                            <p className="card-text">{Record.degree}</p>
                            <div className="footer text-center">
                                 <Link to={`/update/${Record._id}`} className=" btn mr-1 btn-lg btn-info">edit</Link>
                            </div>


                        </div>
                    </div>  
                </div>

                <div className="col-2 mt-4">
                    <ImageLoader record= {Record}/>
                </div>

 
            </div>
        </div>
        </>
    )
}
