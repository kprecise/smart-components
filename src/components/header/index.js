import React from "react";
import { BackgroundContainer, Heading, AspectRatioContainer, AspectRatioInner, LogoImage, HeaderContainer } from "./styledComponents.js";

const Header = ({
  backgroundImage,
  text,
  logo,
  aspectRatio
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
      <HeaderContainer height={backgroundImage.height}>
        <AspectRatioContainer>
          <AspectRatioInner aspectRatio={aspectRatio}>
            <BackgroundContainer backgroundImage={backgroundImage.source} backgroundImageHeight={backgroundImage.height}>
              <Heading>{text}</Heading>
              {isLogo &&
              <LogoImage src={logo.source} imgWidth={logo.width} imgHeight={logo.height}/>
              }
            </BackgroundContainer>
          </AspectRatioInner>
        </AspectRatioContainer>
      </HeaderContainer>
  )
};

export default Header;