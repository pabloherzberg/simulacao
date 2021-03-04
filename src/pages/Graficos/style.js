import styled from "styled-components";
import { colors } from "../../constants/colors.js";

export const Container = styled.div`
  display: grid;
  height: auto;
  width:100vw;
  padding-bottom: 40px;
  grid-template-columns: 85px repeat(12, 1fr) 85px;
  grid-template-rows: repeat(3, auto);

  h1{
    grid-row:1/2;
    grid-column:2/12;
    color:${colors.verdeagua}
  }

  ul{
    grid-row:2/3;
    grid-column:2/12;
    list-style:none;
    display:none;
  }

  #chart{
    
    grid-row:3/4;
    grid-column:2/12;
    height:300px;
    width:100%;
    
  }
`;
