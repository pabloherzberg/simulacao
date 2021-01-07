import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Wrapper = styled.div`
position:relative;
.selectedRow{
    background-color:${colors.blueBorder}
}
#finish{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:red;
}
.kill{
    animation: kill 1s forwards;
    @keyframes kill{
        0%{ opacity:1}; 100%{opacity:0}
    }
}
#buttonExportExcel{
    border:none;
    color:white;
    font-size:1.5em;
    border-radius:4px;
    background-color:${colors.greenNav}
}
`

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