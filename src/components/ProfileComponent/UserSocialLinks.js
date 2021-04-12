import React from 'react'
import { FiGlobe, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
function UserSocialLinks() {
    return (
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
    )
}

export default UserSocialLinks
