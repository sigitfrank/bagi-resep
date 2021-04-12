import React from 'react'
import FoodList from '../components/HomeComponent/Food'
import Search from '../components/Search'

function ResepScreen() {
    return (
        <div className="row">
            <Search />
            <FoodList />
            <FoodList />
            <FoodList />
            <FoodList />
        </div>
    )
}

export default ResepScreen
