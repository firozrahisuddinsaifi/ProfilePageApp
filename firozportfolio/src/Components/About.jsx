import { AboutContent, AboutContentContainer, AboutEducation, AboutHeading, AboutTitle, AboutTitleContainer, Container, EducationContent, EducationHeading } from "./About.styles"


export const About=()=>{


    return(<>

            <div>
                <Container>
                    <AboutTitleContainer>
                        <AboutTitle>About</AboutTitle> 
                     <AboutHeading>Why You should Hire Me?</AboutHeading>
                    </AboutTitleContainer>
                    <AboutContentContainer>
                        <AboutContent>
                        I have gained valuable experience from various internships and projects.
                        I excel at building websites that are easy for users to navigate and help businesses grow. 
                        My strength lies in designing the frontend of websites and solving problems creatively.
                         I enjoy working in teams where I can share new ideas and tackle challenges effectively.
                        </AboutContent>
                    </AboutContentContainer>

                    <AboutEducation>
                    <EducationHeading>Education</EducationHeading>
                    <EducationHeading>Master in Computer Science</EducationHeading>
                    <EducationContent>Indira Gandhi National Open University</EducationContent>
                    <EducationContent>2019-2022</EducationContent>

                    <EducationHeading>Bachelor In Art</EducationHeading>
                    <EducationContent>School Of Open Learning Delhi University</EducationContent>
                    <EducationContent>2012-2016</EducationContent>
                    </AboutEducation>
                </Container>
            </div>

    </>)
}