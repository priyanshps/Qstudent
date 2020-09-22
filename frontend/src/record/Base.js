import React from 'react'
import { Link } from 'react-router-dom'

export default function Base() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-info" >
            <a class="navbar-brand" href="#">StudentQ</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/add">Add Student</Link>
                    </li>
                
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/show">Student list</Link>
                    </li>
                
                </ul>
            </div>
        </nav>
    
    )}


