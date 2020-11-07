import styled from 'styled-components'
import {colors} from '../../constants/colors'

export const Container = styled.div`
    position: fixed;
    height:100px;
    width:100%;
    z-index:500;
    bottom:0;
    background-color:${colors.lightGreen};
    scroll-behavior:smooth;
    overflow-y:scroll;
    ul{
        list-style:none;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        width:calc(100px *5);
        padding:0.5em;
        gap:0.5em;
        margin:0;
        li{
            
            border-radius:4px;
            width:90px;
            height:82px;
            display:flex;
            align-items:center;
            justify-content:center;
            background-color:white;
            span{
                font-weight:bold;
                font-size:1em;
                color:${colors.deepBlue};
                text-align:center;
            }
        }
    }
`