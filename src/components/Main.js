import React from 'react'
import { Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
function Main() {
    return (
        <div className="container">
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/login" component={LoginScreen}></Route>
            <Route path="/register" test="test" render={() => (
                <RegisterScreen />
            )}></Route>
        </div>
    )
}

export default Main
