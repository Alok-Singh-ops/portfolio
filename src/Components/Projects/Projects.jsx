import React from 'react'
import "./projects.css"
import data from '../../Utilities'
import { useState,useEffect } from 'react'
import Project from './Project/Project'

const Projects = () => {
  const [projects, setprojects] = useState([])

  useEffect(() => {
    setprojects(data.projects);

  }, [])
  


  return (
    
    <div className='projects mt-5'>
      <div className="container-fluid">
        <div className="projects-heading">
        <h3 >My Projects</h3>
        <div>Projects I have built so far</div>
        </div>
        <div className="projects-details row ">
          {projects.map((tech,index) =>{
            return  <Project name = {tech.name} image = {tech.image} key = {index}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects