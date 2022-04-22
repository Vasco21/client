import React from 'react';
import './header.css';
import Ai from '../../assets/ai.png';
import Slider from '../../components/Slider';

const slides = [
  {
    city:'CP Developer',
    country: 'To Become CP Dev Use Online Capture and join use Today',
    img: 'https://res.cloudinary.com/creative-power/image/upload/v1650606235/Best-Code-and-Text-Editors_pwbovf.png',
  },
  {
    city:'Solve',
    country: 'We use APIs, cloud-native software, modern technology platforms and reusable code to develop functionality in a way that ensures fastest time to market. We focus on quality assurance throughout, making use of automated testing capabilities.',
    img: 'https://res.cloudinary.com/creative-power/image/upload/v1650601277/image_from_ios-2_curod5.jpg',
  },
  {
    city:'Building',
    country: 'We apply human-centred design thinking and practices to solve problems not only for our clients, but for their customers too',
    img: 'https://res.cloudinary.com/creative-power/image/upload/v1650606405/hum_d24z3m.webp',
  },
  {
    city:'Understanding Dev',
    country: 'We work to optimise your DevOps by understanding current dev and ops teams',
    img: 'https://res.cloudinary.com/creative-power/image/upload/v1650603744/TECH_c3kfmm.jpg',
  },
  {
    city:'Code',
    country: '//',
    img: 'https://res.cloudinary.com/creative-power/image/upload/v1650606564/completion-signature-help_og1mye.gif',
  },
];
export default function header() {
  return (
    <>
     <Slider slides={slides}/>
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
