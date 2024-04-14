import React from "react";
import styled from "styled-components";
import Dintists from "../images/Dintists.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="subtitle">Velkommen til oss</h3>
        <div className="underline"></div>
        <h1 className="title">
          Vi holder til midt på St.
          <br /> Hanshaugen i Oslo sentrum.
        </h1>
        <Link to="#" className="btn">
          Book Now
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${Dintists}) lightgray 50% / cover no-repeat;
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .container {
    text-align: center;
    color: #fff;
    padding-top: 132px;
    padding-bottom: 3rem;
  }

  .subtitle {
    font-size: 12px;
  }

  .title {
    font-size: 16px;
    margin-top: 1rem;
  }
  .underline {
    width: 100px;
    margin: 0 auto;
    height: 5px;
    background-color: #00b8ff;
    border-radius: 10px;
  }
  a.btn {
    background-color: #00b8ff;
    padding: 0.5rem 1.5rem;
    border-radius: 100px;
    text-decoration: none;
    color: #001f2b;
    display: inline-block;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
  }
  a.btn:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

export default Hero;
