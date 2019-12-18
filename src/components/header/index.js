import React, { useEffect} from "react"
import { BackgroundContainer, Heading } from "./styledComponents.js"

const Header = ({
  backgroundImage,
  backgroundColor,
  text,
  textColor,
  textSize,
  padding,
  margin,
  minHeight
                }) => {

  // useEffect = () => {
  //   if (textSize === 'xsmall') {
  //
  //   } else if
  // }

    return (
        <header className="header">
          <BackgroundContainer backgroundColor={backgroundColor} backgroundImage={backgroundImage} padding={padding} margin={margin} minHeight={minHeight}>
            <Heading textSize={textSize} textColor={textColor}>{text}</Heading>
          </BackgroundContainer>
        </header>
    )
};

export default Header