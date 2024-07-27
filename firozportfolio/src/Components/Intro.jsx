import { useState } from "react"
import { FirstText, MainContainer, SecondText } from "./Intro.styles";

export const Intro=()=>{
    
    const [currValue,setCurrValue]=useState("");

    const TextLoad=()=>{
        setTimeout(()=>{
            setCurrValue("React/React Native")
        },0);
        setTimeout(()=>{
            setCurrValue("JavaScript/Git")
        },4000);
        setTimeout(()=>{
            setCurrValue("Html5 And CSS3")
        },8000);

        setTimeout(()=>{
            setCurrValue("C/C++")
        },12000);

        setTimeout(()=>{
            setCurrValue("DSA")
        },16000);


        setTimeout(()=>{
            setCurrValue("DBMS(SQL)")
        },20000);

        setTimeout(()=>{
            setCurrValue("Operating System")
        },24000);
    }

    TextLoad();
   setInterval(TextLoad,28000);
 
  
    return(<>

<MainContainer>
<FirstText></FirstText>
<SecondText >{currValue}</SecondText>
</MainContainer>

    </>)
}