import React from "react";
import styled from "styled-components";
import { Dental_Services } from "../data";

function DentalServices() {
  return (
    <Wrapper>
      <h1 className="title">Our Dental Services</h1>
      <div className="underline"></div>
      <div className="container">
        {Dental_Services.map(({ url, title, desc }, index) => {
          return (
            <div key={index} className="service">
              <img src={url} alt="title" />

              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
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
