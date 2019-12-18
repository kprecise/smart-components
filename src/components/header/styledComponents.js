import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-image: url(${props => props.backgroundImage || "none"});
  background-color: ${props => props.backgroundColor || "white"};
  padding: ${props => props.padding ? "2rem" : "0"};
  margin: ${props => props.padding ? "0 0 2rem" : "0"};
  width: 100%;
  min-height: ${props => props.minHeight || "inherit"}
  background-size: cover;
`;

export const Heading = styled.h1`
  color: ${props => props.textColor || "white"};
  font-size: ${props => props.textSize || "2rem"};
`;