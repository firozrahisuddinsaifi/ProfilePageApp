
import styled from "styled-components";
import Colors from "../Colors";


export const MainContainer=styled.div`
overflow:hidden;
width:25.5rem;
height:10vh;

`

export const FirstText=styled.span`
position:relative;
font-size:30px;
font-weight:600;

`


export const SecondText=styled.span`
position:relative;
color:${Colors.buttonTextColor};
font-size:30px;
font-weight:600;

&::before{
 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${Colors.white};
    border-left: 2px solid ${Colors.black};
    animation:animate 4s steps(12) infinite;
    -webkit-animation:animate 4s steps(12) infinite;

}

@keyframes animate {
    40%,60%{
        left: calc(100% + 4px);
    }
    100%{
        left: 0%;
    }
    
}

`