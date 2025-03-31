import React from 'react'
import '../css/Resume.css'
import Slider from '../components/Slider'

const Resume = () => {
  return (<>
    <div className='mainDiv'>
        <div className="childDiv">
            <h1>Resume</h1>
            <h2>Read more about my Experience</h2>
            <button>Show Resume</button>
        </div>
    </div>
        <Slider/></>
  )
}

export default Resume