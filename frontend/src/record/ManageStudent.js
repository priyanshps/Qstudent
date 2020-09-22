import React ,{useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'
import { getAllRecords } from './helper/recordapicall'

export default function ManageStudent() {

    const [records, setrecords] = useState([])
    const [error, seterror] = useState(false)

    const loadAllRecords = () => {
        getAllRecords().then(data => {
            if(data.error)
            {
                seterror(data.error)
            }
            else{
                setrecords(data)
            }
        })
    }

    useEffect(() => {
        loadAllRecords()
       
    }, [])
    


    return (
        <>
        <Base />
        <div className="container mt-5">
            <h3> Student list</h3>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <Link className="btn btn-info btn-sm">Search</Link> 
                </form>
            </nav>
           

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {records.map((record, index) => {
                        return(
                            <tr>
                                <td>{record.name}</td>
                                <td><Link to="">{record.email} </Link></td>
                                <td><Link 
                                className="btn btn-sm btn-info btn-float" 
                                to={`/update/${record._id}`}
                                > Edit </Link> </td>
                        
                            </tr>

                        )
                    })}
                    
                    
                </tbody>    
            </table>


        </div>
        </>
    )
}
