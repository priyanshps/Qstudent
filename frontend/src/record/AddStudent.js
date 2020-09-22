import React,{useState} from 'react'
import Base from './Base'

export default function AddStudent() {

    const [values,setValues] = useState({
        name:"",
        email:"",
        phone:"",
        degree:"",
        photo:"",
        loading:"",
        error:"",
        getRedirect:false,
        formData: ""

    })

    const {
        name,
        email,
        phone,
        degree,
        loading,
        error,
        getRedirect,
        formData

    } = values;


    const onSubmit = () => {

    }

    const handleChange = name => event => {

    }

    return (
        <>
        <Base />
        
        <div className="container mt-4">
        <h3>Add Record </h3>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
               
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" ></input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Phone</label>
                <input type="Number" className="form-control" ></input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Photo</label>
                <input type="file" className="form-control" ></input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Degree</label>
                <input type="text" className="form-control" ></input>
            </div>
            
        <button type="submit" onClick={onSubmit} className="btn btn-info">Submit</button>
        </form>
        </div>
        </>
    )
}
