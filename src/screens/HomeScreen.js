import React from 'react'
import FoodList from '../components/HomeComponent/Food'
import Search from '../components/Search'

function HomeScreen() {
    return (<div className="row">
        <div className="col-12">
            <img src="https://www.champ-group.com/wp-content/uploads/2014/12/img_banner-thin_mountains.jpg" alt="banner-bagi-resep" className="w-100" height="200px" />
        </div>
        <Search />
        <FoodList />
        <FoodList />
        <FoodList />
        <FoodList />
    </div>
    )
}

export default HomeScreen
