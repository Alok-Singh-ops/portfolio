import React from 'react'
// import profileImg from "assests/profile.png"
import "./introduction.css"

const Introduction = () => {
  return (
    <div className="introduction row mt-5">
      <div className="col col-sm-4">
        <div className="profile-desc">
            Hi👋,
            <br></br>
            My name is
            <br></br>
            <span className='profile-name'> Alok Singh </span>
            <br></br>
            I built things for web
        </div>
      </div>
    <div className="col col-sm-4">
        <div className="profile-img">
          <img src="assests/profile.png" className='img-fluid'/>
        </div>
      </div>
    </div>
  )
}

export default Introduction