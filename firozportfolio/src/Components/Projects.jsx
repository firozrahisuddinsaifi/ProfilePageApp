import { Container, GitHubButton, ProjectCards, ProjectCardsContainer, ProjectContainer, ProjectContainerHeading, ProjectContainerText, ProjectNameText,ProjectHiglightText } from "./Projects.styles";
import ConstValues from "../ConstantValue/ConstValues";

const {
aboutProjects,
github,
highlight,
projectName,

}=ConstValues
export const Projects=()=>{
    return(<>

  

  <ProjectContainer>

          <Container>

        <ProjectContainerHeading>
        <ProjectContainerText>{aboutProjects}</ProjectContainerText>
          </ProjectContainerHeading>

        <ProjectCardsContainer>

        <ProjectCards>
            <ProjectNameText>{projectName}</ProjectNameText>
            <ProjectHiglightText>{highlight}</ProjectHiglightText>
            <GitHubButton>{github}</GitHubButton>
          </ProjectCards>

          <ProjectCards >
            <ProjectNameText>{projectName}</ProjectNameText>
            <ProjectHiglightText>{highlight}</ProjectHiglightText>
            <GitHubButton>{github}</GitHubButton>
          </ProjectCards>

          <ProjectCards>
            <ProjectNameText>{projectName}</ProjectNameText>
            <ProjectHiglightText>{highlight}</ProjectHiglightText>
            <GitHubButton>{github}</GitHubButton>
          </ProjectCards>


        </ProjectCardsContainer>

          </Container>
  </ProjectContainer>
  
    </>)
}