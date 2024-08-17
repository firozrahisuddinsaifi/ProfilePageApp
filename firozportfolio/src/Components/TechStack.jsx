import { TechCardsContainer, TechHeading, TechImageContainer, TechSkillContainer, TechStax } from "./TechStack.styles"


export const TechStack=()=>{

    return<>
        <div>

            <div>
                <TechSkillContainer>
                    <TechHeading>Tech Stacks</TechHeading>
                </TechSkillContainer>

                <TechCardsContainer>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBIch_Bsl-Ea2qIXbpQh8cqTqsWZOHbhuww&s" alt="html_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkMYb955fj7IRiw-8g6gmn5GoZzKni1Kv8g&s" alt="css_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXaZgOP8Dt5J05vGncrxXkY6VJKoi1_lsFw&s" alt="js_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEj_V6_aIHeHJk9LAEq1kk5Bs7bjAzb82qw&s" alt="git_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="gitHub_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="" alt="c/c++_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="" alt="DSA_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="" alt="Dbms_Image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="" alt="sql_image" /><span></span></TechStax>
                <TechStax><TechImageContainer src="" alt="OS_Image" /><span></span></TechStax>
                </TechCardsContainer>
            </div>

        </div>
    </>
}