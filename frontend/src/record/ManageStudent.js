import React ,{useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'

import { getAllRecords } from './helper/recordapicall'
import ShowSearch from './ShowSearch'

export default function ManageStudent() {

    const [records, setrecords] = useState([])
    const [search, setSearch] = useState("")
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
   
    const studentTable  = () => {
        return (
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
                                <td><Link to={`/view/${record._id}`}>{record.email} </Link></td>
                                <td>
                                    <Link 
                                        className="btn btn-sm btn-info btn-float " 
                                        to={`/update/${record._id}`}>
                                        Edit 
                                    </Link>
                                    <Link 
                                        className="btn btn-link p-1" 
                                        to={`/view/${record._id}`}>
                                        View Profile 
                                    </Link>
                                </td>
                        
                            </tr>

                        )
                    })}
                    
                    
                </tbody>    
            </table>
        )

    }
    

    const inputSearch = event =>{
        const data = event.target.value;
        setSearch(data) 
    }


    return (
        <>
        <Base />
        <div className="container mt-5">
            <h3> Student list</h3>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input 
                        class="form-control mr-sm-2" 
                        onChange={inputSearch} type="search" 
                        value={search}
                        placeholder="Search" >
                    </input>
                    <Link className="  btn btn-outline-info btn-sm" to={`/search/${search}`}>Search</Link>
                   
                </form>
            </nav>
            {studentTable()}
            
            
        </div>
        </>
    )
}
