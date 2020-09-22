import React from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'

export default function ManageStudent() {
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
                    <tr>
                        <td>Name</td>
                        <td><Link to="">Email </Link></td>
                        <td><Link className="btn btn-sm btn-info btn-float"> Edit </Link> </td>
                       
                    </tr>
                    
                </tbody>    
            </table>


        </div>
        </>
    )
}
