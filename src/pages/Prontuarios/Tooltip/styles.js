import styled from 'styled-components'

export const Container = styled.div`
    position:absolute;
    background-color:rgba(0,0,0,.3);
    top:0;
    left:0;
    right:0;
    bottom:0;
    #wrapper{
        position:absolute;
        border-radius:16px;
        background-color:white;
        width:70%;
        top:50%;
        left:50%;
        ul{
            list-style:none;
            li:nth-child(even){
                background-color:gray;
            }
        }
    }
`