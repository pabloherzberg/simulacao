import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    width:100%;
    table{
        width:100%;
        thead{
           text-align:center;
           font-weight:bold;
           td{
               font-size:1.5em;
           }
        }
        tr:nth-child(even){
            background-color:${colors.lighGray};
        }
        td{
            text-align:center;
        }
    }
`