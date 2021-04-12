import React from 'react'

function UserDetail() {
    return (
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
    )
}

export default UserDetail
