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
            span{
            width:30%;
            }
            input{
            width:70%;
            }
        }
        
    }
    #save{
        width:100px;
        height:100px;
        cursor:pointer;
        align-self:flex-end;
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
`