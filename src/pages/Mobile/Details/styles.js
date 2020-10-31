import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    ul{
        list-style:none;
        margin:0;
        padding-left:10px;
        li{
            span:first-child{
                font-weight:bold;
            }
        }
        li:nth-child(even){
            background-color:${colors.lighGray};
        }
    }
`