import React from 'react'
import { FiGlobe, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import '../css/profile.css'
function ProfileScreen() {
    return (<div className="row">
        <div className="col-md-5">
            <div className="card profile mt-3">
                <div className="card-body">
                    <div className="avatar-profile">
                        <img src="https://cybercampus.um-surabaya.ac.id/themes/bak/assets/admin/pages/media/profile/profile_user.jpg" alt="profile" className="avatar-img" />
                    </div>
                    <div className="short-profile text-center mt-3">
                        <p>John Doe</p>
                        <p>Full Stack Developer</p>
                        <p>Bay Area, San Francisco, CA</p>
                    </div>
                    <div className="text-center mt-2">
                        <button className="btn btn-primary follow">Follow</button>
                        <button className="btn message">Message</button>
                    </div>
                </div>
            </div>
            <div className="card profile-links mt-3">
                <div className="card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-1">
                                    <FiGlobe className="link-icons" />
                                </div>
                                <div className="col-10">
                                    <span className="social-media">sigifrank.github.io</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-1">
                                    <FiTwitter className="link-icons" />
                                </div>
                                <div className="col-10">
                                    <span className="social-media">sigitfrank</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-1">
                                    <FiInstagram className="link-icons" />
                                </div>
                                <div className="col-10">
                                    <span className="social-media">sigitfrank</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-1">
                                    <FiFacebook className="link-icons" />
                                </div>
                                <div className="col-10">
                                    <span className="social-media">sigitfrank</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-7">
            <div className="card profile-details mt-3">
                <div className="card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Nama Lengkap
                                </div>
                                <div className="col-7">
                                    <span className="social-media">Sigit Tunggul Waskito</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Email
                                </div>
                                <div className="col-7">
                                    <span className="social-media">sigit@gmail.com</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Nomor HP
                                </div>
                                <div className="col-7">
                                    <span className="social-media">082178306189</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Alamat
                                </div>
                                <div className="col-7">
                                    <span className="social-media">Jalan Douglas D8 No 8 Beringin Raya</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card profile-details mt-3">
                <div className="card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Nama Lengkap
                                </div>
                                <div className="col-7">
                                    <span className="social-media">Sigit Tunggul Waskito</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Email
                                </div>
                                <div className="col-7">
                                    <span className="social-media">sigit@gmail.com</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Nomor HP
                                </div>
                                <div className="col-7">
                                    <span className="social-media">082178306189</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-5">
                                    Alamat
                                </div>
                                <div className="col-7">
                                    <span className="social-media">Jalan Douglas D8 No 8 Beringin Raya</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileScreen
