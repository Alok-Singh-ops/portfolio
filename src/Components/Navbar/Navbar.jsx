import React, { useState } from 'react'
// import "./navbar.css"
import { MDBSwitch } from 'mdb-react-ui-kit';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);



  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Alok Singh</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Tech Stack <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Projects <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className='fa fa-github fa-solid'></i>
          <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        <i className="fa fa-brands fa-linkedin"></i>
          <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <BootstrapSwitchButton checked={false}  onstyle="secondary" offlabel='Light' onlabel='Dark' width={70} onChange = {()=> {
          toggleTheme()
        }}/>
      </li>
    </ul>
  </div>
</nav>
      </>
        
  
  )
}

export default Navbar