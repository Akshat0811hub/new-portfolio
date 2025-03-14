import React from 'react'
import owner from '../assets/Screenshot_20240730-192527.png'
import '../css/Home.css'

function Home  ()  {
  return (
    <>
        <div className="main">
            <div className="main-img">
                <img src={owner} alt=""  />
            </div>
        </div>
        <div className="main-body">
          <p className='name'><span>I'm Akshat</span><br/>An experienced UX designer</p>
          
        </div>
    </>
  )
}

export default Home