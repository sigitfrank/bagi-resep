import React from 'react'
import { BiFoodMenu } from 'react-icons/bi'
import Rating from '../HomeComponent/Rating'
function UserFavoritFood() {
    return (
        <div className="col-md-12 col-lg-6">
        <div className="card profile-details mt-3">
            <div className="card-header">
                <h3> <BiFoodMenu /> Makanan Favorit</h3>
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div className="col-5">
                                <Rating />
                            </div>
                            <div className="col-7">
                                <span className="social-media">Nasi Goreng Tenis</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-5">
                                <Rating />
                            </div>
                            <div className="col-7">
                                <span className="social-media">Bubur Ayam SD</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-5">
                                <Rating />
                            </div>
                            <div className="col-7">
                                <span className="social-media">Ketoprak Simpang</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default UserFavoritFood
