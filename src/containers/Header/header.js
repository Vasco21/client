import React from 'react';
import './header.css';
import Ai from '../../assets/ai.png';
import Menu from '../../components/Navbars/Menu'
export default function header() {
  return (
    <>
    {/* <Menu/> */}
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content"> 
        <h1 className="gradient__text">
          With Creative Power We Can Build Amazing Web Applications!!
        </h1>
        <p>With innovation of new creation we can make our life easy, changes and good things 
           can lead us to overcome better future and possibilities of wonderful features.
           Discover the platform that gives you the freedom to have your own business Website and personal Website,
           together we can make change...</p>
        <div className="gpt3__header-content__input">
          <input type="emails" placeholder="Your Email Address"/>
          <button type="button">Get Started </button>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={Ai} alt="ai"/>
        </div>
    </div>
    </>

  )
}
