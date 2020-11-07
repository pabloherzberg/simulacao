import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
 #one{
    #header{
        display:flex;
        justify-content:space-between;
        padding:1em;
        button{
            border:none;
            border-radius:4px;
            background-color:${colors.lightGreen};
            width:50%;
            height:2.5em;
            display:flex;
            justify-content:space-evenly;
            align-items:center;
            color:${colors.white};
            font-weight:bold;
            img{
                height:100%;
                object-fit:contain;
            }
        }
    }
    ul{
        list-style:none;
        margin:0;
        padding-left:10px;
        
        #evolucoes{
            margin:auto;
            display:flex;
            justify-content:center;
            align-items:center;
            height:30%;
            width:80vw;
            color:${colors.white};
            background-color:${colors.lightGreen};
            border:none;
            border-radius:4px;
            font-weight:bold;
        }
        li{
            span:first-child{
                font-weight:bold;
            }
        }
        li:nth-child(even){
            background-color:${colors.lighGray};
        }
    }
 }
 #two{  
    margin-top:1.5em;
     height:30vh;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:space-evenly;
     form{
        align-items:center;
        justify-content:space-evenly;
        display:flex;
        height:80%;
        flex-direction:column;
        align-items:center;
        label {
            cursor: pointer;
            position: relative;
            background-color:${colors.lightGreen};
            border-radius:4px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:30%;
            width:80vw;
            img{
                object-fit:contain;
                height:100%;
            }
            span{
                color:${colors.white};
                font-weight:bold;
                margin-left:10px;
            }
            /* Style as you please, it will become the visible UI component. */
        }

        #upload-photo {
        opacity: 0;
        position: absolute;
        z-index: -1;
        }
     }
     #submit{
            display:flex;
            justify-content:center;
            align-items:center;
            height:30%;
            width:80vw;
            color:${colors.white};
            background-color:${colors.lightGreen};
            border:none;
            border-radius:4px;
            font-weight:bold;
     }
  
 }
`