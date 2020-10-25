import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Select = styled.div`
position: relative;
font-family:Arial;
select{
    width:100%;
    height:3em;
    border:none;
    background-color:${colors.tableHeader};
    color:${colors.white};
}

`