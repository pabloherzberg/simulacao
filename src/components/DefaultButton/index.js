import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${(props) => props.buttoncolor};
  width: ${(props) => props.widthstyle};
  height: ${(props) => (props.heightstyle ? props.heightstyle : "5em")};
  border-radius: 5px;
  border: none;
  font-size: ${(props) => (props.icon ? "auto" : "1em")};
  font-family: "Roboto";
  font-weight: normal;
  text-align: center;
  display: flex;
  padding: 0.5em 1em;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.fontcolor};
  transition: fill 0.25s;
  cursor: pointer;
  text-decoration: none;
  margin: ${(props) => props.margin};
`;

function DefaultButton({
  children,
  as,
  to,
  background,
  fontcolor,
  margin,
  widthstyle,
  heightstyle,
}) {
  return (
    <ButtonContainer
      buttoncolor={background}
      fontcolor={fontcolor}
      margin={margin}
      widthstyle={widthstyle}
      heightstyle={heightstyle}
      as={as}
      to={to}
    >
      {children}
    </ButtonContainer>
  );
}

export default DefaultButton;
