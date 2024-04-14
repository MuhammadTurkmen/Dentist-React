import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { links } from "../data";

function Navbar() {
  const [isSidbarOpen, setIsSidbarOpen] = useState(false);

  return (
    <Wrapper>
      <div className="container">
        <img src={Logo} alt="" />
        <div
          className={isSidbarOpen ? "links-container show" : "links-container"}>
          <IoClose
            className="close-icon"
            onClick={() => setIsSidbarOpen(false)}
          />
          {links.map(({ name, path, id }) => {
            return (
              <Link
                className={name === "Kontakt oss" ? "contact-us" : ""}
                key={id}
                to={path}>
                {name}
              </Link>
            );
          })}
        </div>
        <div className="btn-sidbar-container">
          <Link className="contact-us hide" to="#footer">
            Kontakt oss
          </Link>
          <FaBars className="bars" onClick={() => setIsSidbarOpen(true)} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #00415a;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1.4rem;
    padding-left: 0;
  }
  .links-container {
    display: none;
    position: absolute;
    background-color: #00415a;
    width: 100%;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 25px;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
    }
    a:hover {
      text-decoration: underline;
      transform: scale(1.3);
    }
    a.contact-us {
      text-decoration: none;
    }
  }
  .show {
    display: flex;
  }

  .bars {
    font-size: 30px;
    color: #00b8ff;
  }
  .bars:hover {
  }

  .hide {
    display: none;
  }

  .close-icon {
    color: #fff;
    font-size: 40px;
    transition: all 0.3s ease-in-out;
  }

  .close-icon:hover {
    transform: scale(1.5);
  }

  .contact-us {
    background-color: #00b8ff;
    color: black;
    text-decoration: none;
    padding: 0.8rem 2rem;
    border-radius: 100px;
  }
`;

export default Navbar;
