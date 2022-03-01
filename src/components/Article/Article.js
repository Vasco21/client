import React from 'react';
import './Article.css';
// import { google, slack, dropbox, shopify } from './imports' 


export default function Article() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <a href="https://facebook.com/eddie.vasco/">
          <i className="fa fa-google">google</i>
        </a>
      </div>
      <div>
        <a href="https://facebook.com/eddie.vasco/">
          <i className="fa fa-slack">slack</i>
        </a>
      </div>  
      <div>
        <a href="https://facebook.com/eddie.vasco/">
          <i className="fa fa-dropbox">dropbox</i>
        </a>
      </div>
      <div>
        <a href="https://facebook.com/eddie.vasco/">
          <i className="fa fa-shopify">shopify</i>
        </a>
      </div>
    </div>
  )
}