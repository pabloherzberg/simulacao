import styled from "styled-components";
import { colors } from "../../constants/colors.js";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100vh;
  height: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.verdeagua};
  width: 4em;
  height: 100%;
  transition: ease-in-out 0.2s;
  z-index: 20;
  position: fixed;
  .menuwraper {
    background: ${colors.paragraph};
    width: 4em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.2s;
  }
  .navitems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    ul {
      width: 100%;
      li {
        display: none;
      }
    }
    img {
      transition: ease-in-out 0.2s;
      opacity: 0;
      max-width: 0em;
      padding-bottom: 1.5em;
    }
  }

  &:hover {
    width: 16em;
    .menuwraper {
      width: 16em;
    }
    .navitems {
      img {
        max-width: 12em;
        opacity: 1;
      }
      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-direction: column;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: box-shadow ease-in-out 0.2s;
          &:hover {
            box-shadow: 3px 3px 1px ${colors.purplepink};
            background-color: ${colors.greenButtonHover};
            cursor: pointer;
          }
          &:active {
            box-shadow: 1px 1px 1px ${colors.purplepink};
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  flex: auto;
`;
