import styled from 'styled-components'
import {colors} from '../../constants/colors'

export const Container = styled.div`
    height:100vh;
    ul{
        list-style:none;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        li{
            background-color:blue;
            height:25vh;
            width:25vh;
            img{
                background-color:yellow;
                object-fit:contain;
                width:100%;
                height:100%;
            }
        }
    }

`