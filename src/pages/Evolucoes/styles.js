import styled from 'styled-components'
import {colors} from '../../constants/colors'

export const Container = styled.div`
    header{
      @media only screen and (max-width: 768px) {
            display:none;
        }
         
        background-color:${colors.lighGray};
        height:10vh;
        display:flex;
        img{
            object-fit:scale-down;
            width:20%;
            height:100%;
        }
        form{
            align-items:center;
            justify-content:space-evenly;
            display:flex;
            height:100%;
            
            width:80%;
        label {
            cursor: pointer;
            position: relative;
            background-color:${colors.lightGreen};
            border-radius:4px;
            display:flex;
            justify-content:center;
            align-items:center;
            height:80%;
            width:20vw;
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
            height:80%;
            width:20vw;
            color:${colors.white};
            background-color:${colors.lightGreen};
            border:none;
            border-radius:4px;
            font-weight:bold;
     }
    }
    ul{
        gap:2em;
        @media only screen and (max-width: 768px) {
            flex-direction:column;
        }
        list-style:none;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        padding-top:3em;
        li{
           
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            height:25vh;
            width:25vh;
            img{
                object-fit:contain;
                height:100%;
                
            }
        }
    }

`