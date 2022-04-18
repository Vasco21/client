import React, { useState } from 'react'
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import Menu from './Menu';
import Arrows from '../Arrows/index'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <div className="gpt3_navbar">
        <div className="gpt3_navbar-links">
            <div className="gpt3_navbar-links_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="gpt3_navbar-links_container">
              <a href="#" ><h4>Want to become an Creative Power Dev?<span>Find out how.</span></h4></a>
            </div>
        </div>

        <div className="gpt3_navbar-menu">
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                
              </div>
            </div>
          )
          }
        </div>
        <a href="#"><button className="button" >Self Service</button></a>
    </div>
    <Menu/>
    <Arrows/>
    </>
  )
}
