import React from 'react'

function About({image, aboutText}) {
    const defaultURL="https://via.placeholder.com/215"
    return (
      <aside>
        <img
          src={image || defaultURL}
          alt="blog logo"
        />
        <p>{aboutText}</p>
      </aside>
        
    )
  }

export default About
