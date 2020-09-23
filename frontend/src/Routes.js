import React from 'react'
import {BrowserRouter, Switch, Route, Router} from "react-router-dom"
import AddStudent from './record/AddStudent'
import ShowSingleStudent from './record/ShowSingleStudent'
import landing from './record/landing'
import UpdateStudent from './record/UpdateStudent'
import ManageStudent from './record/ManageStudent'
import ShowSearch from './record/ShowSearch'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={landing}></Route>
        <Route exact path="/add" component={AddStudent}></Route>
        <Route exact path="/show" component={ManageStudent}></Route>
        <Route exact path="/update/:studentId" component={UpdateStudent}></Route>
        <Route  exact path="/search/:name" component={ShowSearch}></Route>
        <Route exact path="/view/:studentId" component={ShowSingleStudent}></Route>
       
      </Switch>

    
    </BrowserRouter>
    
  )
}
