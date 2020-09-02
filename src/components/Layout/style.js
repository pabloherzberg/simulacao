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
  height: auto;
  transition: ease-in-out 0.2s;
  img {
    display: none;
    max-width: 0em;
    align-self: center;
    margin-top: 80%;
  }
  .menuwraper {
    background: ${colors.tableHeader};
    width: 4em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.2s;
  }
  ul {
    li {
      display: none;
    }
  }
  &:hover {
    width: 16em;
    .menuwraper {
      width: 16em;
    }
    img {
      display: block;
      max-width: 12em;
      align-self: center;
      margin-top: 80%;
    }
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      flex-direction: column;
      li {
        display: flex;
        transition: box-shadow ease-in-out 0.2s;
        &:hover {
          box-shadow: 0px 0px 10px ${colors.purplepink};
          cursor: pointer;
        }
      }
    }
  }
`;

export const Content = styled.div`
  flex: auto;
`;
