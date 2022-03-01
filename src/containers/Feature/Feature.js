import React from 'react';
import Features from '../../components/Features/Features';
import './Feature.css';
const featuresData = [
  {
    title: 'Improving and Make Change',
    text: 'Together we can make a difference once we hold our hands and fight for better future. We enable clients to take their place and participate fully in a truly digital, mobile and data-driven future',
  },
  {
    title: 'Lets Make it Active',
    text: 'Software that enables your business, delivers outstanding digital customer experiences, and enhances your operational efficiency.',
  },
  {
    title: 'We Help Customers to Understand their Challenges',
    text: 'Starting with an outside-in approach to problem solving, we then identify what functional applications we need to develop to solve that problem.',
  },
  {
    title: 'We Provide the Digital Glue that Brings it All Together',
    text: 'Using APIs, we can integrate disparate business systems and processes to create interconnected business ecosystems.',
  },
];

export default function Feature() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get started</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Features title={item.title} text={item.text} key={item.title + index} />
      ))}
      </div>  
    </div>
  )
}
