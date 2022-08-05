import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/landing">
          <img
            src="vccommunity-frontend/public/ventureTogetherjpg.png"
            alt="VentureTogether"
            style={{
              maxHeight: "80%",
              maxWidth: "80%",
            }}
          ></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">
            TODO
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;