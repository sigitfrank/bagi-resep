import React from 'react'
import '../css/profile.css'

import UserProfile from '../components/ProfileComponent/UserProfile'
import UserSocialLinks from '../components/ProfileComponent/UserSocialLinks'
import UserDetail from '../components/ProfileComponent/UserDetail'
import UserFavoritFood from '../components/ProfileComponent/UserFavoritFood'
import UserFavoritDrink from '../components/ProfileComponent/UserFavoritDrink'

function ProfileScreen() {
    return (<div className="row">
        <div className="col-md-5">
            <UserProfile/>
            <UserSocialLinks/>
        </div>
        <div className="col-md-7">
            <UserDetail/>
            <div className="row">
               <UserFavoritFood/>
               <UserFavoritDrink/>  
            </div>
        </div>
    </div>
    )
}

export default ProfileScreen
