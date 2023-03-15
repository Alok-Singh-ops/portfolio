import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navSection d-flex justify-content-center'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Tech Stack</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <div className="contactIcon d-flex">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-brands fa-github"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-brands fa-linkedin"></i></a>
        </li>
        </div>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar