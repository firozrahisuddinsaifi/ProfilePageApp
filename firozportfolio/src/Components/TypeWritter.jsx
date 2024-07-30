import {  ButtonContainer, Heading, ImageContainer, MainContainer, ResumeButton,  TextContainer, TypeWritterContainer } from "./TypeWritter.styles";
import ConstValues from "../ConstantValue/ConstValues";
import { Intro } from "./Intro";

const {
    ima,
    resume,
    unlockMyPotentialWithYou,

}=ConstValues

const PDF_FILE_URL='http://localhost:5173/Firoz-CV.pdf';

export const TypeWritter=()=>{

    const downloadFileAtUrl=(url)=>{
        const fileName = url.split('/').pop();
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return(<>


<main>
        <TypeWritterContainer>
            <MainContainer>
                <TextContainer>
                 
                    <Heading>
                        {unlockMyPotentialWithYou} {ima}
                    </Heading>
                  <Intro  newValue={ima}/>
                   
<ButtonContainer>
    <ResumeButton onClick={()=>downloadFileAtUrl(PDF_FILE_URL)}>{resume}</ResumeButton>
</ButtonContainer>
                </TextContainer>
                <ImageContainer >

                    <figure>
                    <Heading>Coming Soon</Heading>
                    {/* use it later */}
                        {/* <ImageView src="#" alt="logo"/> */}
                    </figure>
                </ImageContainer>
            </MainContainer>
        </TypeWritterContainer>
  
</main>

    </>)
}