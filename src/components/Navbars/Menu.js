import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styles";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const Menu = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavBtnLink to="/" activeStyle>Home
          </NavBtnLink>
          <NavLink to="/aboutCompany" activeStyle>About</NavLink>
          <NavLink to="/possibility" activeStyle>Possibility</NavLink>
          <NavLink to="/become" activeStyle>Become An Dev</NavLink>
          <NavLink to="/resources" activeStyle>CPD Resources</NavLink>
          <NavLink to="/contact" activeStyle>Contact Us</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/blogs" activeStyle>Blogs</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Menu;
