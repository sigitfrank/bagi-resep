import React from 'react'
import FoodList from '../components/HomeComponent/Food/Food'
import Search from '../components/Search'

function HomeScreen() {
    return (<div className="row">
        <Search />
        <FoodList />
        <FoodList />
        <FoodList />
        <FoodList />
    </div>
    )
}

export default HomeScreen
