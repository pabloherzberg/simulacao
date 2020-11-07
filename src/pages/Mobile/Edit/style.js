import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    width:100vw;
 #one{
     width:100%;
    #header{
        display:flex;
        justify-content:space-between;
        padding:1em;
       
    }
    ul{
        list-style:none;
        margin:0;
        padding-left:10px;
        width:100%;        
        li{
    
            display:flex;
            width:100%;
            justify-content:space-between;
            padding-top:.5em;
            padding-bottom:.5em;
            span:first-child{
                font-weight:bold;
            }
            select{
                width:60%;
            }
            input{
                width:60%;
            }
        }
        li:nth-child(even){
            background-color:${colors.lighGray};
        }
                
    }
 }
 #two{  
    
    padding:1em;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
     #save{
        background-color:${colors.lightGreen};
        padding:1em;
        display:flex;
        justify-content:center;
        align-items:center;
        width:80%;
        height:4em;
        border-radius:4px;
        img{
            justify-self:flex-start;
            object-fit:contain;
            height:100%;
        }
        label{
            color:${colors.white};
            font-weight:bold;
            margin-left:10px;
        }
            /* Style as you please, it will become the visible UI component. */
        
     }
  
 }
 
  
`

export const Modal = styled.div`
    position: fixed;
    background-color:rgba(0,0,0,.5);
    height:100vh;
    width:100vw;
    justify-content:center;
    display:flex;
    #content{
        margin-top:20%;
        width:90%;
        background-color:white;
        height:50%;
        justify-content:space-evenly;
        flex-direction:column;
        border-radius:4px;
        align-items:center;
        display:flex;
        h2{
            font-size:2em;
            text-align:center;
        }
        input{
            width:80%;
        }
        button{
            border:none;
            border-radius:4px;
            font-weight:bold;
            font-size:1em;
            color:white;
            width:50%;
            height:3em;
            background-color:${colors.lightGreen};
        }
    }
 `