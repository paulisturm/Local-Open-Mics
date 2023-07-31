import React from 'react'

const Navbar = ({setCurrentPage}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CLEVELAND OPEN MICS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" onClick={() => setCurrentPage('Welcome') }>WELCOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={() => setCurrentPage('Mics')}>MICS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('Favorites')}>FAVORITES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('Login') }>LOG IN</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar