import React from 'react'
import './projects.css'
import Img from './../../assets/project-sample.jpg'

const Projects = () => {
  return (
    <div className='projects-step'>
        <div className='projects-text'>
            <h2>Nos Projects</h2>
            <p>les projects precedents very demure very mindful</p>
        </div>
        <div className='projects-list'>
            <div className='project'>
                <img src={Img} alt='' className='pro-images'/>
                <h3>Location</h3>
                <p>location and project details</p>
            </div>
            <div className='project'>
                <img src={Img} alt='' className='pro-images'/>
                <h3>Location</h3>
                <p>location and project details</p>
            </div>
            <div className='project'>
                <img src={Img} alt='' className='pro-images'/>
                <h3 >Location</h3>
                <p>location and project details</p>
            </div>
        </div>
    </div>
  )
}

export default Projects