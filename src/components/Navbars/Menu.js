import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styles";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const Menu = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavBtnLink to="/" >Home
          </NavBtnLink>
          <NavLink to="/aboutCompany" >About</NavLink>
          <NavLink to="/possibility" >Possibility</NavLink>
          <NavLink to="/become" >Become An Dev</NavLink>
          <NavLink to="/resources" >CPD Resources</NavLink>
          <NavLink to="/contact" >Contact Us</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/blogs" >Blogs</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Menu;
