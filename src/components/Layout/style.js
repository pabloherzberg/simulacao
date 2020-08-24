import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
`;

export const NavBar = styled.div`
  background: #191b25;
  flex: 1;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      transition: box-shadow ease-in-out 0.2s;
      &:hover {
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 6;
`;
