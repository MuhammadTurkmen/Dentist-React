import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <Wrapper>
      <div className="container">
        <img src={Logo} alt="" />
        <div className="links-container">
          <Link to="/">Home</Link>
          <Link to="/about">About US</Link>
          <Link to="/prices">Prices</Link>
          <Link to="#Services">Services</Link>
        </div>
        <div className="btn-sidbar-container">
          <Link to="#footer">Kontakt oss</Link>
          <FaBars />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #00415a;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Navbar;
