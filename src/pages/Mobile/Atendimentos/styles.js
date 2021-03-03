import styled from 'styled-components'
import {colors} from '../../../constants/colors'

export const Container = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    div{
        padding:1em;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }
    table{
        tbody{
            tr{
                td{
                    input{
                        width:80%;
                    }
                }
            }
        }
    }
    button{
        border-radius:4px;
        background-color:${colors.blueBorder};
        width:80%;
        height:3em;
        font-weight:bold;
        margin-top:1em;
    }
`