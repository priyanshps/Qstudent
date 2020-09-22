const { API } = require("../../backend");

//Create Record api call
export const createRecord = (record) => {

    return fetch(`${API}/record/create` , {
        method:"POST",
        body: record
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))

}

//Display All Records

export const getAllRecords = () => {

    return fetch(`${API}/records`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// Update Record

export const updateRecord = (studentId,record) => { 

    return fetch(`${API}/record/${studentId}` ,{
        method:"PUT",
        body:record
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))

}

//Search record by Email
export const searchRecord = (studentEmail) => {

    return fetch(`${API}/record/${studentEmail}` , {
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const  deleteRecord = (studentId) => {
    
    return fetch(`${API}/record/${studentId}`, {
        method: "DELETE"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}