import React from 'react'
import { BiDrink } from 'react-icons/bi'
import Rating from '../HomeComponent/Rating'
function UserFavoritDrink() {
    return (
        <div className="col-md-12 col-lg-6">
        <div className="card profile-details mt-3">
            <div className="card-header">
                <h3><BiDrink />Minuman Favorit</h3>
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div className="col-5">
                                <Rating />
                            </div>
                            <div className="col-7">
                                <span className="social-media">Wedang Jahe</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-5">
                                <Rating />
                            </div>
                            <div className="col-7">
                                <span className="social-media">Teh Manis</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-5">
                                <Rating />
                            </div>
                            <div className="col-7">
                                <span className="social-media">Jus Alpukat</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default UserFavoritDrink
