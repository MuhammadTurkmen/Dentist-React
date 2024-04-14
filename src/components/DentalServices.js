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
              <img className="image" src={url} alt="title" />

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

  .service {
    border: 1px solid #00415a;
    border-radius: 20px;
    text-align: center;
    width: 326px;
    margin: 10rem auto;
  }

  .image {
    width: 167px;
    height: 148px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: -5rem;
  }
`;

export default DentalServices;
