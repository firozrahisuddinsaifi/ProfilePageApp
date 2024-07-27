import {  ButtonContainer, Heading, ImageContainer, MainContainer, ResumeButton,  TextContainer, TypeWritterContainer } from "./TypeWritter.styles";
import ConstValues from "../ConstantValue/ConstValues";
import { Intro } from "./Intro";

const {
    ima,
    resume,
    unlockMyPotentialWithYou,
}=ConstValues
export const TypeWritter=()=>{

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
    <ResumeButton href="#">{resume}</ResumeButton>
</ButtonContainer>
                </TextContainer>
                <ImageContainer >

                    <figure>
                    {/* use it later */}
                        {/* <ImageView src="#" alt="logo"/> */}
                    </figure>
                </ImageContainer>
            </MainContainer>
        </TypeWritterContainer>
  
</main>

    </>)
}