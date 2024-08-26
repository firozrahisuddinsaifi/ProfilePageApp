import { Container, GitHubButton, ProjectCards, ProjectCardsContainer, ProjectContainer, ProjectContainerHeading, ProjectContainerText, ProjectNameText,ProjectHiglightText } from "./Projects.styles";
import ConstValues from "../ConstantValue/ConstValues";

const {
aboutProjects,
highlight,
projectName,
githubCode,

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
            <GitHubButton>{githubCode}</GitHubButton>
          </ProjectCards>

          <ProjectCards >
            <ProjectNameText>{projectName}</ProjectNameText>
            <ProjectHiglightText>{highlight}</ProjectHiglightText>
            <GitHubButton>{githubCode}</GitHubButton>
          </ProjectCards>

          <ProjectCards>
            <ProjectNameText>{projectName}</ProjectNameText>
            <ProjectHiglightText>{highlight}</ProjectHiglightText>
            <GitHubButton>{githubCode}</GitHubButton>
          </ProjectCards>


        </ProjectCardsContainer>

          </Container>
  </ProjectContainer>
  
    </>)
}