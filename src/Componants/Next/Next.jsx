import React from 'react'
import './next.css'
import video from './../../assets/line-med.mp4'


const Next = () => {
  return (
    <div className='next'> 
    <video src={video} autoplay='true' className='video-line' loop='true'></video>
    </div>
  )
}

export default Next