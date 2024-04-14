import React from "react";
import styled from "styled-components";

function DentalServices() {
  return (
    <Wrapper>
      <h1 className="title">Our Dental Services</h1>
      <div className="underline"></div>
      <div className="container"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .title {
    text-align: center;
    font-size: 30px;
    margin-top: 112px;
    margin-bottom: 0;
  }
  .underline {
    width: 260px;
    margin: 0 auto;
    height: 5px;
    background-color: #00b8ff;
    border-radius: 10px;
  }
`;

export default DentalServices;
