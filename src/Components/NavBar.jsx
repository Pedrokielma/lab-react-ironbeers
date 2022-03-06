import React from 'react'
import {NavLink} from 'react-router-dom'


function NavBar() {
  return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="navbar-brand" to={`/`}>Home</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link active" to={`/beers`}>All Beers</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to={`/random-beer`}>Random Beer</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to={`/new-beer`}>New Beer</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavBar