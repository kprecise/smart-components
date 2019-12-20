import React from "react";
import { Heading, HeaderWrapper } from "./styledComponents.js";
import './styles.scss'

const Header = ({
  backgroundImage,
  text,
  logo
  }) => {

  const isEmptyObject = (obj) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  };

  const isLogo = !isEmptyObject(logo);

  return (
    <header className="header">
      <HeaderWrapper>
        <Heading>{text}</Heading>
        {isLogo &&
        <img className="logo" src={logo} />
        }
        <img className="main" src={backgroundImage} />
      </HeaderWrapper>
    </header>
  )
};

export default Header;