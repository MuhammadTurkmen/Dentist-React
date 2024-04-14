import React from "react";
import styled from "styled-components";
import child from "../images/children-1.jpg";
import person_img from "../images/person-img.png";

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
        <div className="images-container">
          <img className="person" src={person_img} alt="" />
          <img className="child" src={child} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #00415a;
  color: #fff;

  .container {
    position: relative;
  }
  .title-container {
    padding: 3.5rem;
  }

  .container::before {
    content: "";
    width: 30px;
    height: 100%;
    background-color: #00b8ff;
    position: absolute;
    right: 0;
    border-left: 20px solid black;
  }

  .title {
    font-weight: 700;
    font-size: 30px;
    strong {
      color: #00b8ff;
    }
  }

  .child {
    border-radius: 168px 168px 168px 0px;
    border: 1px solid #000;
    width: 200px;
    height: 206px;
    object-fit: cover;
    position: relative;
    display: block;
  }
  .person {
    border-radius: 0px 900px 900px 900px;
    border: 1px solid #000;
    width: 250px;
    height: 266.373px;
    object-fit: cover;
    margin-bottom: -3rem;
    position: relative;
    z-index: 2;
  }
  .desc {
    margin-top: 3.5rem;
  }
`;

export default Clear;
