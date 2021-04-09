import React, { useState, useContext } from 'react'
import { LoginContext } from '../App'
import { useHistory } from 'react-router-dom'
function LoginScreen() {
    const { setLogin } = useContext(LoginContext)
    const [data, setData] = useState({ email: '', password: '', })

    const handleFormChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        setLogin(true)
        return history.push('/')
    }
    const { email, password } = data
    return (<>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card mt-5 user-login">
                    <div className="card-header">
                        <h2>Masuk</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" value={email} id="email" onChange={(event) => handleFormChange(event)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" value={password} id="password" onChange={(event) => handleFormChange(event)} />
                            </div>
                            <button className="btn btn-primary btn-lg">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default LoginScreen
