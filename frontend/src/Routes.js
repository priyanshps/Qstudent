import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddStudent from './record/AddStudent'
import dashbord from './record/showSingleStudent'
import landing from './record/landing'
import UpdateStudent from './record/UpdateStudent'
import ManageStudent from './record/ManageStudent'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={landing}></Route>
        <Route exact path="/add" component={AddStudent}></Route>
        <Route exact path="/show" component={ManageStudent}></Route>
        <Route exact path="/update/:studentId" component={UpdateStudent}></Route>
        
        

      </Switch>
    </BrowserRouter>
    
  )
}
