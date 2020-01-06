import React from "react";
import { Heading, HeaderWrapper } from "./styledComponents.js";

const Header = ({
  mainImg,
  text,
  logo
  }) => {

  return (
    <header className="header">
      <HeaderWrapper>
        <Heading>{text}</Heading>
        {logo &&
        <img className="logo" src={logo} />
        }
        <img className="main" src={mainImg} />
      </HeaderWrapper>
    </header>
  )
};

export default Header;