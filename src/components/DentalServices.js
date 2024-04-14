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

              <h1 className="service-title">{title}</h1>
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

  .container {
    margin-top: 10rem;
    margin-bottom: 8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10rem 1rem;
    padding: 0 2rem;
  }

  .service {
    border: 1px solid #00415a;
    border-radius: 20px;
    text-align: center;
    width: 326px;
    margin: 0 auto;
    padding: 0 1rem;
    padding-bottom: 3rem;

    p {
      font-size: 16px;
    }
  }

  .image {
    width: 167px;
    height: 148px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: -5rem;
  }
  .service-title {
    font-size: 30px;
    margin-top: 2rem;
  }
`;

export default DentalServices;
