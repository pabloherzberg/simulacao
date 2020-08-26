import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartContainer = styled.div`
  flex: 2;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  .inputfield {
    margin-bottom: 5%;
  }
`;
