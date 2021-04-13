import React from 'react'
import { Route } from 'react-router-dom'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import VideosScreen from '../Screens/VideosScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import ResepScreen from '../Screens/ResepScreen'
function Main() {
    return (
        <div className="container">
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/resep/:id" component={ResepScreen}></Route>
            <Route path="/videos" component={VideosScreen}></Route>
            <Route path="/profile" component={ProfileScreen}></Route>
            <Route path="/login" component={LoginScreen}></Route>
            <Route path="/register" render={() => (
                <RegisterScreen test="test" />
            )}></Route>
        </div>
    )
}

export default Main
