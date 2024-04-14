import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <Wrapper>
      <div className="container">
        <img src={Logo} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #00415a;
`;

export default Navbar;
