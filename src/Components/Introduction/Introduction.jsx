import React from 'react'
import profileImg from "../../assests/profile.png"
import "./introduction.css"

const Introduction = () => {
  return (
    <div className="introduction">
      <div class="container d-flex justify-content-between">
        <div className="profile-desc">
          Hi👋,
          <br></br>
          My name is
          <br></br>
          <span className='profile-name'> Alok Singh </span>
          <br></br>
          I built things for web
        </div>
        <div className="profile-img">
          <img src={profileImg} />
        </div>
    
      </div>
    </div>
  )
}

export default Introduction