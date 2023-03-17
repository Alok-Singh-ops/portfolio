import React from 'react'
import "../Project/project.css"

const Project = ({title,desc,image,preview,sourceCode}) => {
  return (
    <>
        <div className="col-sm-3 mt-5 ms-5 project">
          <div className="card">
          <img className="card-img-top" src = {image} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href= {preview} className="link-secondary">
                <i className="fa fa-solid fa-link" target="_blank">
                </i>
                <span className='ms-2'> Live Preview</span>
              </a>
              <a href={sourceCode} className="link-secondary">
              <i className="fa fa-solid fa-github ms-4" target="_blank">
              </i>
              <span className='ms-2'>Source Code </span>
              
              </a>
            </div>
          </div>
        </div>


    
    
    </>
  )
}

export default Project