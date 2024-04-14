import React from "react";
import styled from "styled-components";

function Clear() {
  return (
    <Wrapper>
      <div className="container">
        <div className="title-container">
          <h1 className="title">
            Clear Dental Clinic - your dentist in <strong>Oslo</strong> and
            Drammen
          </h1>
          <p className="desc">
            Good dental health is important, whether you are young or old.
            However, it is also important to find a dentist you feel comfortable
            with. Clear Dental Clinic has a number of skilled dentists and
            specialists who will take excellent care of you as a patient.
          </p>
        </div>
        <div className="images-container"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #001f2b;
  color: #fff;
  .title {
    font-weight: 400;
  }
`;

export default Clear;
