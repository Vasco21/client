import React from 'react';
import './AboutCompany.css';
import Features from '../../components/Features/Features'

export default function AbouCompany() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
       <div className="gpt3__whatgpt3-feature">
       <Features title="About our Company"  text="The rise of the Mobile APP has lead to a rapid scramble in the software development industry, 
       with development houses going head to head to create the next latest and greatest mobile applications. 
       With a solid team of mobile designer Indigo Vision is at the forefront of developing hybrid and native 
       applications in J2ME devices, Android, IOs, Windows. 
       We have had the pleasure of completing apps for Global Blue chip companies, 
       SME’s and some very creative thinkers. importance to allow your web site and web applications to be accessible via any device. operation systems and 
       browsers to allow for business to remain uninterrupted Get complete design freedom with the Editor. " />
       </div>
       <div className="gpt3__whatgpt3-heading">
         <h1 className="gradient__text">
           The possibilities are beyond your imagination!!!
         </h1>
         <p>Explore The Library</p>
       </div>
       <div className="gpt3__whatgpt3-container">
         
       <Features title="Web/Maintenance" text="Creative Power as a creative and dynamic web development company in in South Africa has year  hands on experience and expertise on different platforms like,
       Shopify Magento,WordPress, React/Native , JavaScript, Html and CSS We know the maintenance needs for SMEs and corporate websites that seek immediate solution, as this is the matter of their online business. 
       We understand that when your website goes down what happens. what happens when your website goes down, We have got several clients who faced challenges and abrupt issues or crisis that are bit difficult to handle individually. 
       We understand how important it is for your business to attract, engage & retain your customers by keeping it up and running round the clock"/>

       <Features title="Graphic/Designer" text="visual communicators who create concepts by hand or by using specialized graphic design software. 
       They communicate ideas to inspire, inform, or captivate consumers through both physical and virtual art forms t
       hat include images, words, or graphics. By constant communication with clients, customers, and other designers, they ensure that 
       their designs accurately reflect the desired message and effectively express information."/>

       <Features title="Education" text="Here at Creative Power we recognise that everyone has different circumstances, That’s why we offer you Online studies and attending extra class on the weekend
       Our bursaries make sure everyone gets a chance at education, and our flexible time models will make sure you can balance your other commitments." />
       </div>
    </div>
  )
}
