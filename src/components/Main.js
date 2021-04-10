import React from 'react'
import { Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ResepScreen from '../screens/ResepScreen'
function Main() {
    return (
        <div className="container">
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/resep/:id" component={ResepScreen}></Route>
            <Route path="/profile" component={ProfileScreen}></Route>
            <Route path="/login" component={LoginScreen}></Route>
            <Route path="/register" render={() => (
                <RegisterScreen test="test" />
            )}></Route>
        </div>
    )
}

export default Main
