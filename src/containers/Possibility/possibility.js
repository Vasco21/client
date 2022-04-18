import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/computer.jpg';
import Home from '../../components/Navbars/index'

export default function possibility() {
  return (
    <>
    <Home/>
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>So, what would you build, if you could DevAnything?</h4>
        <h1 className="gradient__text">The Possibilities are beyond your imagination</h1>
        <p>At Creative Power Dev we develop software, application products, APIs, custom solutions, 
          microservices and integration solutions for organisations looking to make their people’s 
          lives simpler and more efficient.</p>
          <h4>Book a slove session</h4>
      </div>
    </div>
    </>
  )
}
