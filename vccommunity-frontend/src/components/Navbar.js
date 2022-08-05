import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://i.postimg.cc/FKVgtgzg/image-1.png"
            alt="VentureTogether"
            style={{
              height: "100%",
              width: "80%",
            }}
          ></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/userdashboard">
            Dashboard
          </NavLink>
          <NavLink to="/marketplace">
            Market Place
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;