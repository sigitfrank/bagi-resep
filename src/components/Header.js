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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" alt="profile" className="img-profile" />
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <p className="dropdown-item">Hello, Sigit!</p>
            <Link className="dropdown-item" to="/resep/1">Resep</Link>
            <Link className="dropdown-item" to="/profile">Profile</Link>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={logout}>Keluar</button>
          </div>
        </li>
        <li className="nav-item">

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
      <Link className="navbar-brand" to="/">-</Link>
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
