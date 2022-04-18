import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import Home from '../../components/Navbars/index'


export default function contact() {
  return (
    <>
    <Home/>
    <div className="gpt3__contact section__padding" id="home">
      <div className="gpt3__contact-content"> 
        <h1 className="gradient__text">
        Ready to see what your business can achieve with Africa's foremost digital enabler by your side?
        </h1>
        <p>No matter what functionality you need, 
            we bring together the immense skills and capabilities of more than 1,000 
            software and application developers.</p>
        <div className="gpt3__contact-content__input">
        <h2>Our flexible engagement model means we can either:</h2>
        </div>
        <div className="gpt3__contact-icons">
        <FontAwesomeIcon icon={faDiagramProject}/>
        <p>Develop your project or solution end-to-end</p>
        </div>
        <div className="gpt3__contact-icons">
        <FontAwesomeIcon icon={faUsersGear} />
        <p>Supplement your dev team in a shared managed capacity model</p>
        </div> 
        <div className="gpt3__contact-icons">
        <FontAwesomeIcon icon={faGears}/>
        <p>Provide resource augmentation to fill a gap</p>
        </div>  
      </div>
      <div className="gpt3__contact-image">
        <form>
          <div className="col-2">
            <div className="form-group">
              <label>Names <span>*</span></label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="tel" />
            </div>
          </div>
          <h4 className="textH">What Type of Website Do You Need?</h4>
          <div className="col">
          <div className="form-group">
              <div className="radio-buttons">
                <div className="radio-button">
                  <input type="radio" id="radiopersonal" name="type" value="Webdesign" /><label
                   htmlFor="radiopersonal">Web Design</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radiopersonal" name="type" value="Webdevelopment" /><label
                  htmlFor="radiopersonal">Web Development</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radiopersonal" name="type" value="logo" /><label
                  htmlFor="radiopersonal">Logo Design</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radiopersonal" name="type" value="other" /><label
                  htmlFor="radiopersonal">Other</label>
                </div>
            </div>
          </div>
          </div>
          <div className="col-2">
            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col-2">
            <div className="form-group right">
             <button className="primary">send Message</button>
            </div>
          </div>         
        </form>
      </div>
    </div>
    </>
  )
}

