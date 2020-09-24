import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  #tooltip {
    width: 1150px;
    height: 10em;
    left: 3.5em;
    top: 1em;
    z-index: 500;
    position: absolute;
    ul {
      list-style: none;
      display: flex;
      li {
        border-right: 1px solid gray;
        padding-right: 1em;

        p {
          margin: 0;
        }
        p:first-child {
          font-weight: bold;
        }
      }
    }
  }
`;

export const ChartContainer = styled.div`
  flex: 2;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 8em;
`;

export const NavBar = styled.div`
  height: 6em;
  display: flex;
  justify-content: center;
  span {
    display: flex;
    font-size: 4em;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 8em;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  #anterior {
    &:before {
      width: 0.5em;
      height: 3em;
      background: black;
      content: " ";
      display: block;
      position: absolute;
      top: 3.5em;
      transform: translateX(2em) rotate(-45deg);
    }
    &:after {
      width: 0.5em;
      height: 3em;
      background: black;
      content: " ";
      display: block;
      position: absolute;
      top: 1.7em;
      transform: translateX(2em) rotate(45deg);
    }
  }
  #posterior {
    &:before {
      width: 0.5em;
      height: 3em;
      background: black;
      content: " ";
      display: block;
      position: absolute;
      top: 3.5em;
      transform: translateX(4em) rotate(45deg);
    }
    &:after {
      width: 0.5em;
      height: 3em;
      background: black;
      content: " ";
      display: block;
      position: absolute;
      top: 1.7em;
      transform: translateX(4em) rotate(-45deg);
    }
  }
`;
