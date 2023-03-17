import React, { useContext } from 'react'
import { ThemeContext } from '../../App'
import "./tech.css"




const Tech = ({name,image}) => {
  const {theme} = useContext(ThemeContext);
  


  return (

    <div className="col-md-auto mt-5 tech">
          <div className= "ms-5">
          <img className="" src = {image} alt=""/>
          </div>
    </div>
  )
}

export default Tech