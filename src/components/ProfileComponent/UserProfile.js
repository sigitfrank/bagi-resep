import React from 'react'
import { FiUsers, FiUserCheck } from 'react-icons/fi'
function UserProfile() {
    return (
        <div className="card profile mt-3">
            <div className="card-body">
                <div className="avatar-profile">
                    <img src="https://cybercampus.um-surabaya.ac.id/themes/bak/assets/admin/pages/media/profile/profile_user.jpg" alt="profile" className="avatar-img" />
                </div>
                <div className="short-profile text-center mt-3">
                    <p>Sigit Tunggul Waskito</p>
                    <div className="badge">
                        <img src="https://www.iconpacks.net/icons/1/free-badge-icon-1361-thumb.png" alt="user-badge" className="user-badge" />
                    </div>
                    <p>Full Stack Developer</p>
                    <p>Bay Area, San Francisco, CA</p>
                </div>
                <div className="user-follow-container">
                    <div className="user-follow">
                        <p>1792</p>
                        <FiUsers className="follower" /> <span className="follower">Pengikut</span>
                    </div>
                    <div className="user-follow">
                        <p>512</p>
                        <FiUserCheck className="following" /> <span className="following">Mengikuti</span>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-primary follow">Follow</button>
                    <button className="btn message">Message</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
