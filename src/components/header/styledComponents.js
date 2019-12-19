import styled from 'styled-components'
import { COLORVARIABLES, TEXTSIZE, SPACINGVARIABLES } from './styleVariables.js'

export const HeaderContainer = styled.div(({ height }) => ({
  height: height + "px"
}));

export const BackgroundContainer = styled.div(({ backgroundImage, backgroundImageHeight }) => ({
  backgroundImage: `url(${backgroundImage})` || 'none',
  backgroundColor: COLORVARIABLES.BACKGROUND || 'transparent',
  padding: SPACINGVARIABLES.PADDING,
  margin: SPACINGVARIABLES.MARGIN,
  width: '100%',
  height: backgroundImageHeight + "px" || 'inherit',
  backgroundSize: 'cover'
}));

export const Heading = styled.h1({
  color: COLORVARIABLES.FOREGROUND || 'white',
  fontSize: TEXTSIZE
});

export const AspectRatioContainer = styled.div(({ aspectRatio }) => ({
  position: 'relative',
  '&:before': {
    display: 'block',
    content: '',
    width: '100%',
    paddingTop: aspectRatio + "%" }
}));

export const AspectRatioInner = styled.div({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0'
});

export const LogoImage = styled.img(({ imgWidth, imgHeight }) => ({
  'width': imgWidth,
  'height': imgHeight
}));