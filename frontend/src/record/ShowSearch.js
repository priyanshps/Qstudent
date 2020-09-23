import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'
import { getRecordByName } from './helper/recordapicall'





 
export default function ShowSearch(props) {


    const [records, setRecord] = useState([])
    const [Error, setError] = useState()
    

    const loadRecord = (name) => {
        
        getRecordByName(name)
        .then(data => {
            if(data.error)
            {
                setError(data.error)
            }
            setRecord(data)
           
           
        })
        .catch(err => console.log(err))
        
    }
    
    const searchFor = props.match.params.name;


    useEffect(() => {
        loadRecord(searchFor)
         
    }, [])

    
   

    const studentTable  = () => {
        
        return (
        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {records.map((record, index) => {
                        return(
                            <tr>
                                <td>{record.name}</td>
                                <td><Link to={`/view/${record._id}`}>{record.email} </Link></td>
                                <td><Link 
                                className="btn btn-sm btn-info btn-float" 
                                to={`/update/${record._id}`}
                                > Edit </Link> </td>
                        
                            </tr>

                        )
                    })}
                    
                    
                </tbody>    
            </table>
        )

    }



    
    return (
        <>

            <Base/>
           
            <div className="container mt-5">
            <p><Link to="/show">Go Back</Link></p>
            <h3>Search Result </h3>
               
                {studentTable()}

            </div>
        </>
    )
}
