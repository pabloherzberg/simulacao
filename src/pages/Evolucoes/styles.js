import styled from 'styled-components'
import {colors} from '../../constants/colors'

export const Container = styled.div`
    height:100vh;
    ul{
        @media only screen and (max-width: 768px) {
            flex-direction:column;
        }
        list-style:none;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        li{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            height:25vh;
            width:25vh;
            img{
                object-fit:contain;
                width:100%;
                height:100%;
            }
        }
    }

`