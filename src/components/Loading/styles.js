import styled from 'styled-components'

export const Container = styled.div`
position:absolute;
z-index:1000;
top:0;
left:0;
width:100vw;
height:100vh;
background:white;
display:flex;
justify-content:center;
align-items:center;
p{ 
    margin-top:100px;
    font-weight:bold;
    align-self:flex-start;
}
#red{
    width:50%;
    height:50%;
    position:absolute;
    animation: pulseRed infinite 2s;
}
#green{
    width:50%;
    height:50%;
    position:absolute;
    animation: pulseGreen infinite 2s;
}
@keyframes pulseRed{
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}
@keyframes pulseGreen{
    0%{
        opacity:1;
    }
    100%{
        opacity:0;
    }
}
`