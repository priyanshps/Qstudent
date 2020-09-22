import React,{useState ,useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import Base from './Base'
import { createRecord } from './helper/recordapicall';

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
        createdRecord:"",
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
        createdRecord

    } = values;

    const preload = () => {
        setValues({...values , formData: new FormData()})

    }

    useEffect(() => {
        preload();
    }, []);

    const onSubmit = (event) => {

        event.preventDefault();
        setValues({...values , error:"" , loading:true})
        console.log(formData);
        createRecord(formData).then(data => {
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
                    createRecord:data.name


                })

            }
        })


    }

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    }
    const redirect = () => (
        (getRedirect && (
          <Redirect to="/show">
    
          </Redirect>
        ))
    )
    const successMessage = () => (
        <>
       
        <div
          className="alert alert-success mt-3 msg"
          style={{ display: createdRecord ? "" : "none" }}
        >
          <h4>{createdRecord} created successfully</h4>
        </div>
        {redirect()}
        </>
      );
    
    
      const errMessage = () => (
        
        <div
          className="alert alert-danger mt-3 msg"
          style={{ display: error ? "".error : "none" }}
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
                        placeholder="choose a file"
                    />
                </label>
             </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Degree</label>
                <input type="text" onChange={handleChange("degree")} value={degree} className="form-control" ></input>
            </div>
            
        <button type="submit" onClick={onSubmit} className="btn btn-info">Submit</button>
        </form>
        </div>
        </>
    )
}
