import React from 'react'
import { Link } from 'react-router-dom'
import "../style.css"

export default function landing() {
    return (
        <div className="container">
          <div id="landing" className="">
                <h1>studentQ</h1>
                <p>Digital Solution for record management </p>
                <Link type="button" class="btn btn-info btn-lg" to="/add">Add student</Link>

          </div>  
                
        </div>
    )
}
