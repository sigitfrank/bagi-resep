import React, { useReducer } from 'react'
import { SET_EMAIL, SET_PASSWORD } from '../ActionTypes/RegisterAction'
import { RegisterReducer } from '../Reducer/RegisterReducer'

const initialState = { email: '', password: '', }

function RegisterScreen() {
    const [state, dispatch] = useReducer(RegisterReducer, initialState)

    const { email, password } = state
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`${email}, ${password}`)
    }
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
                                <input type="email" name="email" className="form-control" value={email} id="email" onChange={(event) => dispatch({ type: SET_EMAIL, value: event.target.value })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" value={password} id="password" onChange={(event) => dispatch({ type: SET_PASSWORD, value: event.target.value })} />
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
