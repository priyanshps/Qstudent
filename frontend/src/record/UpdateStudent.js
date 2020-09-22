import React,{useState ,useEffect} from 'react'
import { Link, Redirect } from "react-router-dom";
import { getRecord } from './helper/recordapicall';
import Base from './Base';
import { updateRecord ,deleteRecord} from './helper/recordapicall';

export default function UpdateStudent({match}) {


    const [values,setValues] = useState({
        name:"",
        email:"",
        phone:"",
        degree:"",
        photo:"",
        loading:"",
        error:"",
        getRedirect:false,
        updatedRecord:"",
        formData: ""

    })

    const {
        name,
        email,
        phone,
        degree,
        photo,
        loading,
        error,
        getRedirect,
        formData,
        updatedRecord

    } = values;

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      };
    
    const onSubmit = event =>  {

        event.preventDefault();
        setValues({...values , error:"", loading: true})
        updateRecord(match.params.studentId,formData).then(data => {
            if(data.error)
            {
                setValues({ ...values, error: data.error });
            }
            else
            {
                setValues({
                   
                    ...values,
                    name:"",
                    email:"",
                    phone:"",
                    photo:"",
                    degree:"",
                    loading:false,
                    getRedirect:true,
                    updatedRecord:data.name

                })
            }
        })

    }
    const onDelete = event => {
      

            event.preventDefault();
            setValues({...values , error:"", loading: true})
            deleteRecord(match.params.studentId).then(data => {
                if(data.error)
                {
                    setValues({ ...values, error: data.error });
                }
                else
                {
                    setValues({
                       
                        ...values,
                        name:"",
                        email:"",
                        phone:"",
                        photo:"",
                        degree:"",
                        loading:false,
                        getRedirect:true,
                        updatedRecord:data.name
    
                    })
                }
            })
    
    
    
        
    }


    const preload = (recordId) => {
        getRecord(recordId).then(data => {
            console.log("data ".data)
            if(data.error)
            {
                setValues({...values,error: data.error})
            }
            else
            {
                setValues({
                    ...values,
                    name:data.name,
                    email:data.email,
                    phone:data.phone,
                    photo:data.photo,
                    degree: data.degree,
                    formData: new FormData(),

                })
            }
        })
    }
    useEffect(() => {
        
        preload(match.params.studentId);
    }, []);

    const successMessage = () => (
        <>
       
        <div
          className="alert alert-success mt-3 msg"
          style={{ display: updatedRecord ? "" : "none" }}
        >
          <h4>{updatedRecord} created successfully</h4>
        </div>
        {redirect()}
        </>
      );
    
      const redirect = () => (
        (getRedirect && (
          <Redirect to="/show">
    
          </Redirect>
        ))
    )
    
      const errMessage = () => (
        
        <div
          className="alert alert-danger mt-3 msg"
          style={{ display: error ? "" : "none" }}
        >
          <h4>E. {error}</h4>
        </div>
      );



    return (
        <>
        <Base />
        
        {successMessage()}
        {errMessage()}
        
        <div className="container mt-4">
        <h3>Add Record </h3>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text"  onChange={handleChange("name")} value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
               
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email"  onChange={handleChange("email")} value={email} className="form-control" ></input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Phone</label>
                <input type="Number"  onChange={handleChange("phone")} value={phone} className="form-control" ></input>
            </div>
            <div className="form-group">
                <label className="btn btn-block btn-info">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        
                    />
                </label>
             </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Degree</label>
                <input type="text" onChange={handleChange("degree")} value={degree} className="form-control" ></input>
            </div>
            
        <button type="submit" onClick={onSubmit} className="btn btn-info">Submit</button>
        <button type="submit" onClick={onDelete} className="btn btn-danger">Delete</button>
        </form>
        </div>
        </>
            
        
    )
}
