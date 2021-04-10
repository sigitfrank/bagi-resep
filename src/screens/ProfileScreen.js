import React from 'react'
import { FaGlobeAsia, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import '../css/profile.css'
function ProfileScreen() {
    return (<div className="row">
        <div className="col-md-5">
            <div className="card profile mt-3">
                <div className="card-body">
                    <div className="avatar-profile">
                        <img src="https://cybercampus.um-surabaya.ac.id/themes/bak/assets/admin/pages/media/profile/profile_user.jpg" alt="profile" className="avatar-img" />
                    </div>
                    <div className="profile-detail text-center mt-3">
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
                            <FaGlobeAsia className="link-icons" />  Website <span className="social-media">sigifrank.github.io</span>
                        </li>
                        <li>
                            <FaTwitter className="link-icons" /> Twitter <span className="social-media">sigitfrank</span>
                        </li>
                        <li>
                            <FaInstagram className="link-icons" /> Instagram <span className="social-media">sigitfrank</span>
                        </li>
                        <li>
                            <FaFacebookF className="link-icons" /> Facebook <span className="social-media">sigittw</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileScreen
