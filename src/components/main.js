import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import SignUp from './signup'
import SignIn from './signin'
import PasswordReset from './password_reset'
import Dashboard from './dashboard'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/passwordreset' component={PasswordReset}/>
        <Route path='/dashboard' component={Dashboard}/>
        
    </Switch>
  </main>
)

export default Main
