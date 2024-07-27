import styled from "styled-components";
import Colors from "../Colors";



export const TypeWritterContainer=styled.div`



`



export const MainContainer=styled.div`

max-width:100rem;
margin:0 auto;
padding:2.6rem 2.4rem;
display:grid;
grid-template-columns:repeat(2,1fr);
gap:2.6rem;
align-items:center;
`
export const TextContainer=styled.div`
`
export const RunningTextContainer=styled.div`
overflow:hidden;
widht:15.5rem;
display:grid;
justify-content:center;
align-items:center;
border:2px solid;


`
export const RunningText=styled.span`
   position: relative;
    color: #4070Fa;
    font-size: 30px;
    font-weight: 600;

`
export const SupportingText=styled.span`

&::after{
content:"";
color:blue;
}

&::before{
    content:"";
    position:absolute;
    widht:100%;
    height:100%;
    background:red;
}
`
export const Heading=styled.h1`
font-size:45px;

`



export const ButtonContainer=styled.div`
margin-top:1rem;
`
export const ResumeButton=styled.a`

background-color: ${Colors.buttonColor};
color:${Colors.buttonTextColor};
padding:0.8rem 3rem;
display:inline-block;
border-radius:0.3rem;
text-decoration:none;
letter-spacing:0.1rem;
font-weight:500;

&:hover{
    background-color:${Colors.black};
 
    box-shadow:${Colors.buttonShadow};
}

`

export const ImageContainer=styled.div`

`

export const ImageView=styled.img`

width:100%;
height:auto;

`


