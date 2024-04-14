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
  }
`;

export default DentalServices;
