import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    h2{
        padding-left:2em;
        height:3em;
        display:flex;
        align-items:center;
    }
    table{
        width:100%;
        tr{
            width:100%;
            font-size:1.5em;
            height:3em;
            td{
                height:3em;
                padding:.5em;
                img{
                    object-fit:contain;
                    height:100%;
                }
            }
        }
        tr:nth-child(even){
            background-color:${colors.lighGray}
        }
    }
`