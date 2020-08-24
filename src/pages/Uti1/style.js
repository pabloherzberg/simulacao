import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
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
  flex-direction: column;
`;
