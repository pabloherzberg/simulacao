import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    margin:0;
    padding:0;
    background-image: linear-gradient(to right,${colors.white}, ${colors.greenButtonHover},${colors.verdeagua});
    font-size:12px;
    span{
        font-weight:bold;
    }
    ul{
        margin:0;
        padding-left:1em;
        list-style:none;
        height:100%;
        width:40%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        li{
            padding:0;
            margin:0;
            span{
                width:20%;
            }
            input{
                width:80%;

            }
            display:flex;
        }
    }
    div{
        margin-top:1em;
        padding-left:.5em;
        width:30%;
        p{
        width:100%;
        display:flex;
        justify-content:space-between;
            span{
            width:30%;
            }
            input{
            width:70%;
            }
        }
        
    }
    #wrapperButtons{
        display:flex;
        flex-direction:row;
       
        width:100%;
        justify-content:space-evenly;
        #prontuarios{
            display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
            width:80px;
            height:80px;
            cursor:pointer;
            img{
                width:100%;
                object-fit:contain;
            }
            label{
                font-size:14px;
                font-weight:bold;
                color:white;
            }
        }
    
        #save{
           display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
            width:80px;
            height:80px;
            cursor:pointer;
            img{
                width:100%;
                object-fit:contain;
            }
            label{
                font-size:14px;
                font-weight:bold;
                color:white;
                
            }
        }
    }
`