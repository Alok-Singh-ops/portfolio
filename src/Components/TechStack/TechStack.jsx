import React from 'react'
import "./techStack.css"
import { useState,useEffect } from 'react';
import data from '../../Utilities';
import Tech from '../Tech/Tech';


const TechStack = () => {

  const [techStack, setTechStack] = useState([]);
  
  useEffect(() => {
    setTechStack(data.techStack);
  }, [])
  

  return (
    <div className='techStack mt-5'>
      <div className="container-fluid">
        <div className="techStack-heading">
        <h3 >My Tech Stack</h3>
        <div>Technologies I've been working with recently</div>
        </div>
        <div className="techStack-details row ">
          {techStack.map((tech,index) =>{
            return  <Tech name = {tech.name} image = {tech.image} key = {index}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default TechStack