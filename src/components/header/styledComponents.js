import styled from 'styled-components'
import { COLORVARIABLES, TEXTSIZE, SPACINGVARIABLES } from './styleVariables.js'

export const HeaderWrapper = styled.div({
  position: 'relative',
  width: '100%',
  height: 'auto',
  padding: SPACINGVARIABLES.PADDING,
  margin: SPACINGVARIABLES.MARGIN,
  '.main': {
    width: '100%',
    height: 'auto'
  },
  '.logo': {
    position: 'absolute'
  }
});

export const Heading = styled.h1({
  position: 'absolute',
  color: COLORVARIABLES.FOREGROUND ? COLORVARIABLES.FOREGROUND : 'white',
  fontSize: TEXTSIZE
});