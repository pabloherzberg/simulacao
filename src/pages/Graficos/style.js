import styled from "styled-components";
import { colors } from "../../constants/colors.js";

export const Container = styled.div`
  display: grid;
  height: auto;
  width:100vw;
  padding-bottom: 40px;
  grid-template-columns: 85px repeat(12, 1fr) 85px;
  grid-template-rows: repeat(3, auto);

  h2{
    grid-row:1/2;
    grid-column:2/6;
    color:${colors.verdeagua}
  }

  #legenda{
    grid-row:1/2;
    grid-column:6/12;
    padding:20px;
    h6{
      background-color:red;
      color:white;
    }
    ul{
      list-style:none;
      display:flex;
      li{
        margin-left:16px;
      }
      border-bottom:1px solid red;
    }
  }
  
  #chart{
    
    grid-row:2/3;
    grid-column:2/12;
    height:300px;
    width:100%;

    
  }

  #chart2{
   
    grid-row:3/4;
    grid-column:2/12;
    height:300px;
    width:100%;
    margin-top:40px;
  }

  .totais{
    p:first{
      background-color:${colors.pink};
    }
  }
  
`;
