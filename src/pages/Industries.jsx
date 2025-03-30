import React from 'react'
import Industry from '../components/Industry/Industry'
import '../css/Industries.css'

const Industries = () => {
    return (
        <div className="indus-component">
          <div className="indus-component-heading">
            <h1>
              I’ve been in various<span> industries and<br></br> domains</span> working with design
            </h1>
          </div>
          <div className="indus-components-img">
            <div className="indus-components-group">
              <Industry
                text="Payment, investing and saving apps in top-tier fintechs."
              />
              <Industry
                text="Streaming solutions for music and VOD subscriptions."
              />
              <Industry
                text="Web and app checkouts and in-store payment services."
              />
              <Industry
                text="E-magazine, audio, and e-book offerings in the entertainment subscription domain."
              />
              <Industry
                text="Direct payments via open banking. Web and app banking services."
              />
              <Industry
                text="Complex internal tools and advanced management procedures."
              />
              </div>
          </div>
        </div>
    )    
}

export default Industries