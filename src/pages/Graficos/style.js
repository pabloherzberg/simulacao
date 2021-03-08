import styled from "styled-components";
import { colors } from "../../constants/colors.js";

export const Container = styled.div`
  display: grid;
  height: auto;
  width:100vw;
  padding-bottom: 40px;
  grid-template-columns: 85px repeat(12, 1fr) 85px;
  grid-template-rows: 80px repeat(3, auto);

  h2{
    grid-row:1/2;
    grid-column:2/6;
    color:${colors.verdeagua}
  }

  #pdfexport{
    grid-row:2/3;
    grid-column:11/13;

    width:100%;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:red;
    border:none;
    border-radius:8px;
    color:white;
    img{
      object-fit:contain;
      width:50%;
      height:80%;
    }
  }

  #legenda{
    grid-row:2/3;
    grid-column:2/8;
   
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

  #export-zone{
    grid-row:3/4;
    grid-column:2/13;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
  }
  
  #chart1{
   
    height:300px;
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    select{
      width:300px;
      margin-top:40px;
    }

    .charts{
      display:flex;
      height:100%;
      width:100%;
    }
  }

  #chart2{
    height:300px;
    width:100%;
    

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    select{
      width:300px;
    }

    .charts{
      display:flex;
      height:100%;
      width:100%;
    }
  }

  .totais{
    p:first{
      background-color:${colors.pink};
    }
  }
  
`;
