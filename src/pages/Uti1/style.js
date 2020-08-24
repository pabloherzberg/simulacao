import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    position: absolute;
    top: 3em;
  }
`;

export const Wrap = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  flex-direction: column;
  width: 30%;
  align-items: center;
  margin-bottom: 1.5em;
  input {
    width: 90%;
  }
`;

export const ChatDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  flex-direction: column;
`;
