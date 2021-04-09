import React, { useState } from 'react'

function RegisterScreen() {

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleFormChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`${email}, ${password}`)
    }
    const { email, password } = data
    return (<>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card mt-5 user-login">
                    <div className="card-header">
                        <h2>Daftar Bagi Resep</h2>
                    </div>
                    <div className="card-body">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" value={email} id="email" onChange={(event) => handleFormChange(event)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" value={password} id="password" onChange={(event) => handleFormChange(event)} />
                            </div>
                            <button className="btn btn-primary btn-lg">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default RegisterScreen
