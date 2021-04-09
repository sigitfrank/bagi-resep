import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { LoginContext } from '../App'
function Navbar() {
  const { login, setLogin } = useContext(LoginContext)
  let history = useHistory()
  const logout = () => {
    setLogin(false)
    return history.push('/login')

  }

  const checkNavbarLoggedIn = () => {
    if (login) {
      return (<>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hello, Sigit
            </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/resep">Resep</Link>
            <Link className="dropdown-item" to="/resep">Profile</Link>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={logout}>Keluar</button>
          </div>
        </li>
      </>)
    } else {
      return (<>
        <li className="nav-item active">
          <Link className="nav-link" to="/login">Masuk</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Daftar</Link>
        </li>
      </>)
    }
  }
  return (<>
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Bagi Resep</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {checkNavbarLoggedIn()}
        </ul>
      </div>
    </header>
  </>
  )
}

export default Navbar
