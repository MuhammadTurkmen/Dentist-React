import React from "react";
import styled from "styled-components";
import Dintists from "../images/Dintists.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <h3>Velkommen til oss</h3>
        <div className="underline"></div>
        <h1>Vi holder til midt på St. Hanshaugen i Oslo sentrum.</h1>
        <Link to="#">Book Now</Link>
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
`;

export default Hero;
