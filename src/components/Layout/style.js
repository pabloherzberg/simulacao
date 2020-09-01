import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100vh;
  height: 100%;
`;

export const NavBar = styled.div`
  background: #191b25;
  width: 4em;
  height: auto;
  transition: ease-in-out 0.2s;
  .menuwraper {
    background: #ccc;
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
          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
          cursor: pointer;
        }
      }
    }
  }
`;

export const Content = styled.div`
  flex: auto;
`;
